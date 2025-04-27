import { getAllNews, getNewsByTerm } from './../../features/supabase/controllers';
import { useEffect, useState } from "react";
import db from "features/firebase/Firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import useSWR from 'swr'
import { getAllTerms } from "../../features/supabase/controllers";

/**
 * 
 */
export async function fetchTerms2() {
  return await getAllTerms();
}

export async function fetchTerms() {
  const querySnapshot = await getDocs(
    query(collection(db, "terms"), orderBy("index", "desc"))
  );
  const termsData = querySnapshot.docs.map((doc) => doc.data());
  return termsData;
}


export function useTerms() {
  return useSWR("terms", fetchTerms2);
}

export function useNews(termId: number | undefined) {
  if (termId === undefined) {
    return useSWR("news", getAllNews);
  }

  const result = useSWR(termId ? `news:${termId}` : null, () => getNewsByTerm(termId));
  return result;
}