import { SupabaseClient } from "@supabase/supabase-js";
import { getAuthenticatedClient, getSupabaseClient } from "./supabaseClient";
import { Course, FileDocument, Lesson, News, Term, TermAddingDTO } from "./types";

/** ------------------------------------------
 *  News Controllers
 *  ------------------------------------------*/

/**
 * Get news items filtered by a term.
 * (Ensure your news table has a term field if needed)
 */
export const getNewsByTerm = async (termId: string | undefined) => {
  if (termId === undefined || termId === null) {
    throw new Error("Term ID is required");
  }
  
  const term = await getTermById(termId);
  if (!term) {
    throw new Error("Term not found");
  }

  const startDate = new Date(term.start_year, term.start_month - 1, 1);

  const endDate = new Date(term.end_year, term.end_month, 0);

  const { data, error } = await getSupabaseClient()
    .from("news")
    .select("*")
    .gte("date", startDate.toISOString())
    .lte("date", endDate.toISOString());

  if (error) {
    throw error;
  }
  return data;
};

export const getAllNews = async (): Promise<News[]> => {
  const { data, error } = await getSupabaseClient().from("news").select("*");
  if (error) throw error;
  return data;
};

export const getNewsById = async (id: string) => {
  const { data, error } = await getSupabaseClient()
    .from("news")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Helper functions to generate next ID */
const getNextId = async (tableName: string) => {
  const { data, error } = await getSupabaseClient()
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
  id: string,
  news: Partial<News>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("news").update(news).eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteNews = async (id: string, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("news").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Course Controllers
 *  ------------------------------------------*/
/**
 * @returns all courses
 */
export const getAllCourses = async (): Promise<Course[]> => {
  const { data, error } = await getSupabaseClient().from("course").select("*");
  if (error) throw error;
  return data;
};

export const getCourseById = async (id: string) => {
  const { data, error } = await getSupabaseClient()
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
  id: string,
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

export const deleteCourse = async (id: string, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("course").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Term Controllers
 *  ------------------------------------------*/
export const getAllTerms = async (): Promise<Term[]> => {
  const { data: terms, error: termsError } = await getSupabaseClient()
    .from("term")
    .select("*");
  if (termsError) throw termsError;

  if (!terms) {
    return [];
  }

  const termsWithCourseCount = await Promise.all(
    terms.map(async (term) => {
      const { data: courses, error: coursesError } = await getSupabaseClient()
        .from("course")
        .select("id")
        .eq("term_id", term.id);

      if (coursesError) throw coursesError;

      return {
        ...term,
        courseCount: courses?.length || 0,
      };
    })
  );

  return termsWithCourseCount;
};

export const getTermById = async (id: string): Promise<Term | null> => {
  const { data, error } = await getSupabaseClient()
    .from("term")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

/** Term Controllers */
export const addTerm = async (
  client: SupabaseClient,
  term: TermAddingDTO,
) => {
  const { data, error } = await client.from("term").insert({
    ...term,
  });
  if (error) throw error;
  return data;
};

export const updateTerm = async (
  id: string,
  term: Partial<Term>,
  accessToken?: string | null
) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("term").update(term).eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteTerm = async (id: string, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("term").delete().eq("id", id);
  if (error) throw error;
  return data;
};

/** ------------------------------------------
 *  Lesson Controllers
 *  ------------------------------------------*/
export const getLessonsByCourse = async (courseId: string) => {
  const { data, error } = await getSupabaseClient()
    .from("lesson")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data;
};

export async function getAllLessons(): Promise<Lesson[]> {
  const { data, error } = await getSupabaseClient()
    .from("lesson")
    .select("*")
    .order("order_index", { ascending: true });
  if (error) throw error;
  return data;
}

export const getLessonById = async (id: string) => {
  const { data, error } = await getSupabaseClient()
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
  id: string,
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

export const deleteLesson = async (id: string, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client.from("lesson").delete().eq("id", id);
  if (error) throw error;
  return data;
};

export async function getAllFIles(): Promise<FileDocument[]> {
  const { data, error } = await getSupabaseClient()
    .from("file_document")
    .select("*");
  if (error) throw error;
  return data;
}

/** ------------------------------------------
 *  File Controllers
 *  ------------------------------------------*/
export const getFilesByLesson = async (lessonId: string) => {
  const { data, error } = await getSupabaseClient()
    .from("file_document")
    .select("*")
    .eq("lesson_id", lessonId);
  if (error) throw error;
  return data;
};

export const getFileById = async (id: string) => {
  const { data, error } = await getSupabaseClient()
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
  id: string,
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

export const deleteFile = async (id: string, accessToken?: string | null) => {
  const client = getAuthenticatedClient(accessToken || undefined);
  const { data, error } = await client
    .from("file_document")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const getCoursesByTerm = async (termId: string) => {
  console.log("Fetching courses for term ID:", termId);
  const { data, error } = await getSupabaseClient()
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

/**
 * Add UUID to term by id
 * @param authedClient 
 * @param id 
 */
export async function updateTermUUID(
  authedClient: SupabaseClient,
  id: string,
) {
  const { data: updatedTerm, error: updateError } = await authedClient
    .from('term')
    .update({ uuid: crypto.randomUUID() })
    .eq('id', id);
}
