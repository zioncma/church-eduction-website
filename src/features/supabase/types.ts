
/** TypeScript interfaces representing our data models */
export interface News {
  id?: number;
  content: string;
  date: string;
  form_link?: string;
  title?: string;
}

export interface Course {
  id?: number;
  term: number; // references term.id
  title: string;
  description?: string;
  uuid?: string; // new field for unique identifier
}

export interface Term {
  id?: number;
  name: string;
  end_year: number;
  end_month: number;
  start_year: number;
  start_month: number;
  courseCount?: number;
}

export interface Lesson {
  id?: number;
  course_id: number; // references course.id
  order_index?: number;
  title: string;
  subtitle?: string;
  content?: string;
}

export interface FileDocument {
  id?: number;
  lesson_id: number; // references lesson.id
  link: string;
  title: string;
  file_type: string;
}
