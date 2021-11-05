import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { MemberListPage } from './member-list.page';
import { MemberListLogic } from './logic/member-list.logic';
import { of } from 'rxjs';

describe('MemberListPage', () => {
  let modal: Modal;
  let component: MemberListPage;
  let fixture: ComponentFixture<MemberListPage>;
  let memberListLogic: MemberListLogic;
  let modalCtrl: ModalController;
  let location: Location;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [MemberListPage],
      imports: [IonicModule.forRoot()],
      providers: [MemberListLogic, ModalController, Location],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberListPage);
    memberListLogic = TestBed.inject(MemberListLogic);
    modalCtrl = TestBed.inject(ModalController);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('テスト準備', () => {
    test('コンポーネントがインスタンス化されていること', () => {
      expect(component).toBeTruthy();
    })
    test('MemberListLogicがインスタンス化されていること', () => {
      expect(memberListLogic).toBeTruthy();
    })
    test('ModalControlがインスタンス化されていること', () => {
      expect(modalCtrl).toBeTruthy();
    })
    test('Locationがインスタンス化されていること', () => {
      expect(location).toBeTruthy();
    })
  });

  describe('goBackToSetting', () => {
    beforeEach(() => {
      jest.spyOn(location, 'back');
    })
    test('location backが呼び出されていること', () => {
      component.goBackToSetting();
      expect(location.back).toHaveBeenCalled();
    })
  });

  describe('presentInviteMembers', async () => {
    beforeEach(() => {
      //   jest.spyOn(modalCtrl, 'create');
      //   jest.spyOn(modalCtrl, 'onDidDismiss')
      // })
    });

    describe('presentMemberDetail', () => {

    });

    describe('searchValue', () => {

    })
  });
