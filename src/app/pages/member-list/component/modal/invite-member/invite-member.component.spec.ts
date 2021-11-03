import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { InviteMemberComponent } from './invite-member.component';
import { MemberListLogic } from '../../../logic/member-list.logic';
import { CreateUserMutation } from 'src/app/shared/service/amplify.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

jest.mock('src/app/pages/member-list/logic/member-list.logic');

describe('InviteMemberComponent', () => {
  let component: InviteMemberComponent;
  let fixture: ComponentFixture<InviteMemberComponent>;
  let memberListLogic: MemberListLogic;
  let modalCtrl: ModalController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [InviteMemberComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot()
      ],
      providers: [MemberListLogic, ModalController],
    }).compileComponents();

    fixture = TestBed.createComponent(InviteMemberComponent);
    memberListLogic = TestBed.inject(MemberListLogic);
    modalCtrl = TestBed.inject(ModalController);
    component = fixture.componentInstance;
    component.companyMembersForm = new FormGroup({
      companyMembers: new FormArray([
        new FormGroup({
          companyMemberEmail: new FormControl('', Validators.compose([Validators.required, Validators.email]))
        })
      ]),
    })
  }));

  describe('テスト準備', () => {
    test('コンポーネントがインスタンス化されていること', () => {
      expect(component).toBeTruthy();
    });
    test('', () => {
      expect(modalCtrl).toBeTruthy();
    })
    test('MemberListLogicがインスタンス化されていること', () => {
      expect(memberListLogic).toBeTruthy();
    })
  })

  describe('dismissModal', () => {
    let modalSpy;
    beforeEach(() => {
      modalSpy = jest.spyOn(modalCtrl, 'dismiss').mockReturnValue(Promise.resolve(true))
    })
    describe('Nullを遷移元に渡す', () => {
      test('nullを渡されること', () => {
        component.dismissModal(null);
        expect(modalSpy).toBeCalledWith(null);
      })
    })
    describe('Array<CreateUserMutation>を遷移元に渡す', () => {
      const resultArgs = [
        {
          __typename: "User",
          id: 'aaa',
          email: 'aaaaa',
          companyID: 'aaaaa',
          company: {
            __typename: "Company",
            id: '111',
            name: '11111',
            officer: [{
              __typename: "Officer",
              officerEmail: 'asadasdasd',
              officerName: 'asdfasdfsd',
            }],
            isRegistered: false,
            createdAt: 'asdfasdfasd',
            updatedAt: 'afdsfasdfsad',
          },
          createdAt: 'asdfasdfsad',
          updatedAt: 'asfdasdfasd',
        }
      ] as Array<CreateUserMutation>;
      test('Array<CreateUserMutation>を渡すこと', () => {
        component.dismissModal(resultArgs);
        expect(modalSpy).toBeCalledWith(resultArgs);
      })
    })
  });

  describe('addCompanyMember', () => {
    beforeEach(() => {
      component.addCompanyMember();
      fixture.detectChanges();
    })
    it('配列が２になっていること', () => {
      console.log(component.companyMemberArray.length);
      expect(component.companyMemberArray).toHaveLength(2);
    });
  })

  describe('removeCompanyMember', () => {
    beforeEach(() => {
      component.addCompanyMember();
    })
    it('配列が１になっていること', () => {
      component.removeCompanyMember(1);
      expect(component.companyMemberArray).toHaveLength(1);
    })
  })

  describe('registerCompanyMembers', () => {
    let spyLogic;
    let spyDismissModal;
    const resultMock = [
      {
        __typename: "User",
        id: 'aaaaaa',
        email: 'aaaaaaa',
        companyID: 'aaaaa',
        createdAt: 'aaaaa',
        updatedAt: 'aaaaaa'
      }
    ] as Array<CreateUserMutation>;
    beforeEach(() => {
      spyLogic = jest.spyOn(memberListLogic, 'registerCompanyMembers').mockReturnValue(of(resultMock));
      spyDismissModal = jest.spyOn(component, 'dismissModal');
      component.registerCompanyMembers();
    });
    test('spyDismissModalが呼び出されること', () => {
      expect(spyDismissModal).toHaveBeenCalledWith(resultMock);
    })
  });
});
