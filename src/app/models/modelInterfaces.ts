export interface Course {
  _id: String;
  courseTitle: String;
  courseDescription: String;
  creatorID: String;
  sequences: String[];
  created_at: {type: Date, required: true};
  updated_at: {type: Date, required: true};
}

export interface Question {
  _id: string;
  title: string;
  text: string;
  type: string;
  creatorID: string;
  questionAnswer: {
    text: string,
    javascript: string,
    csharp: string
  };
  userAnswer?: string;
  userResponse?: string;
  updated_at: {type: Date, required: true};
}

export class Result {
  _id: String;
  type: String;
  dateTime: number;
  answer: String;
  courseID: String;
  sequenceID: String;
  questionID: String;
  courseTitle: String;
  sequenceTitle: String;
  questionTitle: String;
}

export interface Sequence {
  _id: string;
  sequenceTitle: string;
  sequenceDescription: string;
  creatorID: string;
  questions: string[];
  created_at: {type: Date, required: true, default};
  updated_at: {type: Date, required: true };
}

export interface User {
  _id: String;
  local: {
    firstName: String;
    lastName: String;
    username: String;
    email: String;
    password: String;
    admin: Boolean;
    userType: String;
    organisation: String;
    location: String;
    meta: {
      age: Number;
      website: String;
    } //,
    // created_at: {type: Date, required: true, default: Date.now},
    // updated_at: {type: Date, required: true, default: Date.now}
  };
  facebook: {
    id: String;
    token: String;
    email: String;
    name: String;
  };
  azure: {
    id: String;
    token: String;
    email: String;
    name: String;
    givenName: String;
    familyName: String;
  };
  results: Result[];
}

export interface Document {
  _id: String;
  documentTitle: String;
  courseID: String;
  uploaderID: String;
  originalFilename: String;
  systemFilename: String;
  uploaded_at: {type: Date, required: true};
}

