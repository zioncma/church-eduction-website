/**
 * Course item for setup, will be used for application form, web page news, and internal email
 */
export type CourseItem = {
  title: string; // Title of the course
  year: number; // Year that the course was taken (4-digit)
  term: string; // e.g. Spring, Summer, Fall, Winter
  description?: string; // Description of the course
  news?: string; // News about this course. used for webpage promotion
  "start-date"?: string; // The Start date of the course, e.g. 1月14日
  schedule?: string; // Date range of the course, e.g. 4月16日 至 6月18日, 逢星期日（5月20日長週末停課）共七課
  time?: string; // e.g. Specific time, e.g. 上午10:20 - 11:10
  location?: string; // Location of the class, e.g. Zoom在線課程
  "promotion-dates": string; // Multiple dates  that the course is promoted on, separated by comma if more than one
  "target-audience": string; // Who is the target audience? e.g 所有信徒均可參加
  teacher: string; 
  note: string; // Additional information or instruction for the course, which will be shown on the website page, e.g. 為了不影響崇拜的交通順暢，請儘量停泊在教會旁邊的 Frontenac Drive 小街。
  published: boolean; // Whether it's publised on the website  or not
  "form-link":  string; // Link to the online application form
};
