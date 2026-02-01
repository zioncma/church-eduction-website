/** TypeScript interfaces representing our data models */
export interface News {
  id?: string;
  content: string;
  date: string;
  form_link?: string;
  title?: string;
}

export interface Course {
  id?: string;
  termId: string; // references term.id
  title: string;
  description?: string;
}

export type TermAddingDTO = {
  name: string;
  end_year: number;
  end_month: number;
  start_year: number;
  start_month: number;
}

export type Term = {
  id?: string;
  courseCount?: number;
} & TermAddingDTO;

export interface Lesson {
  id?: string;
  course_id: string; // references course.id
  order_index?: number;
  title: string;
  subtitle?: string;
  content?: string;
}

export interface FileDocument {
  id?: string;
  lesson_id: string; // references lesson.id
  link: string;
  title: string;
  file_type: string;
}
