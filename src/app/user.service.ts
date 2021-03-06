import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ICourse, IEnrolement, IQuestion, IResult, ISequence, IUser} from './models/modelInterfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './models/modelClasses';
import config from './config.json';
import {CourseSequenceQuestionService} from './course-sequence-question.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class UserService {

  user: User = new User();
  isUserLoggedIn = false;
  courses: ICourse[];
  enrolements: IEnrolement[];
  router: Router;
  currentCourse: ICourse;
  currentSequence: ISequence;
  currentQuestion: IQuestion;
  currentCourseID: string;
  currentCourseTitle: string;
  currentSequenceID: string;
  currentSequenceTitle: string;
  currentQuestionID: string;
  currentQuestionTitle: string;
  serverAddress = config.serverAddress;

  constructor(private http: HttpClient, router: Router, private courseSequenceQuestionService: CourseSequenceQuestionService) {
    this.router = router;
    this.courses = [];
  }

  loginUser(user: IUser) {
    console.log(user);
    return this.http.post(this.serverAddress + '/api/auth/local/', {'username': user.local.username, 'password': user.local.password});
  }

  initiateUser(user: IUser) {
    this.user = user;
  }

  setCurrentCourse(course: ICourse) {
    console.log('Current course was just set');
    console.log(course);
    this.currentCourse = course;
    localStorage.setItem('currentCourse', JSON.stringify(course));
  }

  getCurrentCourse() {
    //  let course = JSON.parse(localStorage.getItem('currentCourse'));
    if (this.currentCourse == null) {
      const course = JSON.parse(localStorage.getItem('currentCourse'));
      return course;
    } else {
      return this.currentCourse;
    }
  }

  setCurrentSequence(sequence) {
    localStorage.setItem('currentSequence', JSON.stringify(sequence));
  }

  getCurrentSequence() {
    const sequence = JSON.parse(localStorage.getItem('currentSequence'));
    return sequence;
  }

  setCurrentQuestions(questions: IQuestion[]) {
    localStorage.setItem('currentQuestions', JSON.stringify(questions));
  }

  getCurrentQuestions() {
    const questions = JSON.parse(localStorage.getItem('currentQuestions'));
    return questions;
  }


  getEnrolementsForUser() {
    this.http.get<IEnrolement[]>(config.serverAddress + '/api/enrolement/user/' + this.getCurrentUser()._id).subscribe((enrolements) => {
        this.enrolements = enrolements;
        this.getCoursesForUser();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCoursesForUser() {
    this.courses = [];
    for (let i = 0; i < this.enrolements.length; i++) {
      this.courseSequenceQuestionService.getCourseByID(this.enrolements[i].courseID).subscribe(data => {
          this.courses.push(data);
        },
        (err) => {
          console.log('Error fetching course:' + err);
        }
      );
    }
  }

  getCurrentScoreForCourse(courseID) {
    const userResults = this.getCurrentUser().results;

    let score = 0;

    for (const result of userResults) {
      if (result.courseID === courseID) {
        score++;
      }
    }
    return score;
  }

  logOut(): void {
    this.user = null;
    this.isUserLoggedIn = false;
    this.courses = [];
    localStorage.clear();
    this.router.navigate(['login']).catch(reason => {
      console.log('Could not navigate to home:' + reason);
    });
  }

  getCurrentUser(): IUser {
    return this.user;
  }

  addCorrectAnswer(question: IQuestion, answer: string): any {

    const course = this.getCurrentCourse();
    const sequence = this.getCurrentSequence();
    const result: IResult = new IResult;
    result.questionID = question._id;
    result.questionTitle = question.title;
    result.type = question.type;
    result.answer = answer;
    result.courseID = course._id;
    result.courseTitle = course.courseTitle;
    result.sequenceID = sequence._id;
    result.sequenceTitle = sequence.sequenceTitle;
    result.dateTime = Date.now();


    console.log('This is the result that has been created:');
    console.log(result);

    this.user.results.push(result);


    this.updateUserResultsInDatabase().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error('Error updating user results!');
        //  return Observable.throw(err);
      },
      () => {
        // Must also update users results locally....
        return true;
      }
    );
  }

  updateUserResultsInDatabase() {
    return this.http.post(this.serverAddress + '/api/user/results/', {'_id': this.user._id, 'results': this.user.results}, httpOptions);
  }

  hasUserAlreadyAnsweredQuestion(questionID: string): boolean {

    let alreadyAnsweredQuestion = false;
    for (let i = 0; i < this.user.results.length; i++) {
      if (this.user.results[i].questionID === questionID) {
        alreadyAnsweredQuestion = true;
        break;
      }
    }
    return alreadyAnsweredQuestion;
  }

}
