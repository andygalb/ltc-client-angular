import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS, MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule, MatSlideToggle, MatSortModule,
  MatSpinner,
  MatTableModule, MatTabsModule, MatTreeModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {Component} from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CourseComponent} from './course/course.component';
import {CourseEditComponent} from './course/course-edit/course-edit.component';
import {QuestionComponent} from './question/question.component';
import {QuestionEditComponent} from './question/question-edit/question-edit.component';
import {QuestionDetailComponent} from './question/question-detail/question-detail.component';
import {SequenceComponent} from './sequence/sequence.component';
import {AdminComponent} from './admin/admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminUserComponent} from './admin/admin-user/admin-user.component';
import {AdminQuestionComponent} from './admin/admin-question/admin-question.component';
import {AdminCourseComponent} from './admin/admin-course/admin-course.component';
import {DocumentsComponent} from './course/documents/documents.component';
import {CourseHomeComponent} from './course/course-home/course-home.component';

import {UserService} from './user.service';
import {CourseSequenceQuestionService} from './course-sequence-question.service';
import {FormBuilder, FormsModule} from '@angular/forms';
import {SequenceEditComponent} from './sequence/sequence-edit/sequence-edit.component';
import {SequenceHomeComponent} from './sequence/sequence-home/sequence-home.component';
import {AdminSequenceComponent} from './admin/admin-sequence/admin-sequence.component';
import {HttpConfigInterceptor, LoaderService} from './interceptor/httpconfig.interceptor.';

import {FlexLayoutModule} from '@angular/flex-layout';
import {CourseSequenceComponent} from './course/course-sequence/course-sequence.component';
import {CourseSearchComponent} from './course-search/course-search.component';
import {TruncatePipe} from './truncate.pipe';
import {CourseStudentsComponent} from './course/course-students/course-students.component';

import {QuestionDialogComponent} from './dialogs/question-dialog/question-dialog.component';
import {CourseDialogComponent} from './dialogs/course-dialog/course-dialog.component';
import {SequenceDialogComponent} from './dialogs/sequence-dialog/sequence-dialog.component';
import {MessagesComponent} from './messages/messages.component';


import {AngularEditorModule} from '@kolkov/angular-editor';
import {HighlightModule} from 'ngx-highlightjs';
import {AceEditorModule} from 'ng2-ace-editor';

import {ReactiveFormsModule} from '@angular/forms';

import xml from 'highlight.js/lib/languages/xml';
import cs from 'highlight.js/lib/languages/cs';
import {NewsDialogComponent} from './dialogs/news-dialog/news-dialog.component';
import {NewsComponent} from './news/news.component';
import {CourseProgressComponent} from './course/course-progress/course-progress.component';
import {CourseDescriptionComponent} from './course/course-description/course-description.component';
import {MessageDialogComponent} from './dialogs/message-dialog/message-dialog.component';
import {MessengerComponent} from './messenger/messenger.component';
import {MessengerInboxComponent} from './messenger/messenger-inbox/messenger-inbox.component';
import {MessengerSentComponent} from './messenger/messenger-sent/messenger-sent.component';
import {MessageViewDialogComponent} from './dialogs/message-view-dialog/message-view-dialog.component';
import {LandingComponent} from './landing/landing.component';
import {SequenceNavigatorComponent} from './sequence/sequence-navigator/sequence-navigator.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {CourseListComponent} from './home/course-list/course-list.component';
import {SiteNewsComponent} from './home/site-news/site-news.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export function hljsLanguages() {
  return [
    {name: 'cs', func: cs},
  ];
}


@NgModule({
  entryComponents: [QuestionDialogComponent, CourseDialogComponent, NewsDialogComponent,
    SequenceDialogComponent, MessageDialogComponent, MessageViewDialogComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    AdminUserComponent,
    AdminQuestionComponent,
    AdminCourseComponent,
    AdminSequenceComponent,
    CourseComponent,
    CourseEditComponent,
    CourseHomeComponent,
    CourseListComponent,
    CourseDialogComponent,
    CourseSequenceComponent,
    CourseSearchComponent,
    CourseProgressComponent,
    CourseDescriptionComponent,
    CourseListComponent,
    CourseStudentsComponent,
    DocumentsComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    QuestionComponent,
    QuestionEditComponent,
    QuestionDetailComponent,
    QuestionDialogComponent,
    NewsDialogComponent,
    MessagesComponent,
    MessengerComponent,
    MessengerInboxComponent,
    MessengerSentComponent,
    MessageDialogComponent,
    MessageViewDialogComponent,
    NewsComponent,
    ProfileComponent,
    SequenceComponent,
    SequenceEditComponent,
    SequenceHomeComponent,
    SequenceDialogComponent,
    SequenceNavigatorComponent,
    SiteNewsComponent,
    SettingsComponent,
    TruncatePipe
  ],
  imports: [
    AceEditorModule,
    AngularEditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatTreeModule,
    MatSidenavModule,
    MatSelectModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [UserService,
    LoaderService,
    CourseSequenceQuestionService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, backdropClass: 'backdropBackground'}},
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
