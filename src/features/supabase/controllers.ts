import { supabase, getAuthenticatedClient } from "./supabaseClient";

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

/** ------------------------------------------
 *  News Controllers
 *  ------------------------------------------*/

/**
 * Get news items filtered by a term.
 * (Ensure your news table has a term field if needed)
 */
export const getNewsByTerm = async (termId: number | undefined) => {
  if (termId === undefined || termId === null) {
    throw new Error("Term ID is required");
  }
  
  const term = await getTermById(termId);
  if (!term) {
    throw new Error("Term not found");
  }

  const startDate = new Date(term.start_year, term.start_month - 1, 1);

  const endDate = new Date(term.end_year, term.end_month, 0);

  const { data, error } = await supabase
    .from("news")
    .select("*")
    .gte("date", startDate.toISOString())
    .lte("date", endDate.toISOString());

  if (error) {
    throw error;
  }
  return data;
};

export const getAllNews = async () => {
  const { data, error } = await supabase.from("news").select("*");
  if (error) throw error;
  return data;
};

export const getNewsById = async (id: number) => {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Helper functions to generate next ID */
const getNextId = async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select("id")
    .order("id", { ascending: false })
    .limit(1);

  if (error) throw error;
  return data && data.length > 0 ? data[0].id + 1 : 1;
};

/** News Controllers */
export const addNews = async (
  news: Partial<News>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const nextId = await getNextId("news");
  const { data, error } = await client.from("news").insert({
    ...news,
    id: nextId,
  });
  if (error) throw error;
  return data;
};

export const updateNews = async (
  id: number,
  news: Partial<News>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("news").update(news).eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteNews = async (id: number, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("news").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Course Controllers
 *  ------------------------------------------*/
export const getAllCourses = async () => {
  const { data, error } = await supabase.from("course").select("*");
  if (error) throw error;
  return data;
};

export const getCourseById = async (id: number) => {
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Course Controllers */
export const addCourse = async (
  course: Partial<Course>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const nextId = await getNextId("course");
  const { data, error } = await client.from("course").insert({
    ...course,
    id: nextId,
  });
  if (error) throw error;
  return data;
};

export const updateCourse = async (
  id: number,
  course: Partial<Course>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client
    .from("course")
    .update(course)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteCourse = async (id: number, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("course").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Term Controllers
 *  ------------------------------------------*/
export const getAllTerms = async () => {
  const { data: terms, error: termsError } = await supabase
    .from("term")
    .select("*");
  if (termsError) throw termsError;

  if (!terms) {
    return [];
  }

  const termsWithCourseCount = await Promise.all(
    terms.map(async (term) => {
      const { data: courses, error: coursesError } = await supabase
        .from("course")
        .select("id")
        .eq("term", term.id);

      if (coursesError) throw coursesError;

      return {
        ...term,
        courseCount: courses?.length || 0,
      };
    })
  );

  return termsWithCourseCount;
};

export const getTermById = async (id: number) => {
  const { data, error } = await supabase
    .from("term")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Term Controllers */
export const addTerm = async (
  term: Partial<Term>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const nextId = await getNextId("term");
  const { data, error } = await client.from("term").insert({
    ...term,
    id: nextId,
  });
  if (error) throw error;
  return data;
};

export const updateTerm = async (
  id: number,
  term: Partial<Term>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("term").update(term).eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteTerm = async (id: number, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("term").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Lesson Controllers
 *  ------------------------------------------*/
export const getLessonsByCourse = async (courseId: number) => {
  const { data, error } = await supabase
    .from("lesson")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data;
};

export const getLessonById = async (id: number) => {
  const { data, error } = await supabase
    .from("lesson")
    .select("*, file_document(*)")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Lesson Controllers */
export const addLesson = async (
  lesson: Partial<Lesson>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const nextId = await getNextId("lesson");
  const { data, error } = await client.from("lesson").insert({
    ...lesson,
    id: nextId,
  });
  if (error) throw error;
  return data;
};

export const updateLesson = async (
  id: number,
  lesson: Partial<Lesson>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client
    .from("lesson")
    .update(lesson)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteLesson = async (id: number, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("lesson").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  File Controllers
 *  ------------------------------------------*/
export const getFilesByLesson = async (lessonId: number) => {
  const { data, error } = await supabase
    .from("file_document")
    .select("*")
    .eq("lesson_id", lessonId);
  if (error) throw error;
  return data;
};

export const getFileById = async (id: number) => {
  const { data, error } = await supabase
    .from("file_document")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** File Controllers */
export const addFile = async (
  file: Partial<FileDocument>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const nextId = await getNextId("file_document");
  const { data, error } = await client.from("file_document").insert({
    ...file,
    id: nextId,
  });
  if (error) throw error;
  return data;
};

export const updateFile = async (
  id: number,
  file: Partial<FileDocument>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client
    .from("file_document")
    .update(file)
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteFile = async (id: number, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client
    .from("file_document")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const getCoursesByTerm = async (termId: number) => {
  console.log("Fetching courses for term ID:", termId);
  const { data, error } = await supabase
    .from("course")
    .select("*")
    .eq("term", termId);

  if (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }

  console.log("Courses found:", data);
  return data;
};
