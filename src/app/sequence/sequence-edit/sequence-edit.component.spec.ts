import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceEditComponent} from './sequence-edit.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MatCardModule, MatDialog, MatFormFieldModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';
import {FormBuilder, FormsModule} from '@angular/forms';
import {TruncatePipe} from '../../truncate.pipe';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';

describe('SequenceEditComponent', () => {
  let component: SequenceEditComponent;
  let fixture: ComponentFixture<SequenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceEditComponent, TruncatePipe],
      imports: [MatCardModule, MatMenuModule, MatTableModule, MatIconModule, RouterModule, FormsModule, MatFormFieldModule],
      providers: [{provide: ActivatedRoute},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: UserService, useClass: MockUserService},
        {provide: MatDialog},
        {provide: FormBuilder}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
