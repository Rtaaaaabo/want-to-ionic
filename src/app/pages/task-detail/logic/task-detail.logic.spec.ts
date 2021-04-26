import { TestBed } from '@angular/core/testing';
import { TaskDetailLogic } from './task-detail.logic';
import { TaskDetailService } from '../service/task-detail.service';
import { SessionService } from 'src/app/shared/service/session.service';

describe('TaskDetailLogicService', () => {
  let logic: TaskDetailLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDetailLogic, SessionService]
    });
    logic = TestBed.inject(TaskDetailLogic);
  });

  it('TaskDetailLogicがインスタンス化されていること', () => {
    expect(logic).toBeTruthy();
  });
});
