import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SequenceEditComponent} from './sequence-edit.component';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {
  MatCardModule,
  MatDialog,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';
import {FormBuilder, FormsModule} from '@angular/forms';
import {TruncatePipe} from '../../truncate.pipe';
import {CourseSequenceQuestionService} from '../../course-sequence-question.service';
import {MockCourseSequenceQuestionService, MockUserService} from '../../mocks/mocks';
import {UserService} from '../../user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SequenceEditComponent', () => {
  let component: SequenceEditComponent;
  let fixture: ComponentFixture<SequenceEditComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SequenceEditComponent, TruncatePipe],
      imports: [RouterTestingModule, BrowserAnimationsModule, MatCardModule, MatInputModule, MatMenuModule,
        MatTableModule, MatIconModule, RouterModule, FormsModule, MatFormFieldModule],
      providers: [{provide: ActivatedRoute, useValue: {parent: {snapshot: {params: {'id': '123'}}}}},
        {provide: CourseSequenceQuestionService, useClass: MockCourseSequenceQuestionService},
        {provide: UserService, useClass: MockUserService},
        {provide: MatDialog,  useValue: {}},
        { provide: FormBuilder, useValue: formBuilder }
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
