import useSWR from 'swr';
import { fetchCourses } from './apis';
import { useEffect, useState } from "react";
import db from "features/firebase/Firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export function useCourseList() {
  const { data, error } = useSWR('firebaseCourses', fetchCourses);
  return { data, error, isLoading: !data && !error };
}


async function fetchTerms() {
  // const querySnapshot = await getDocs(
  //   query(collection(db, "terms"), orderBy("index", "desc"))
  // );
  // const termsData = querySnapshot.docs.map((doc) => doc.data());
  // return termsData;
}

export function useTerms() {
  // const [terms, setTerms] = useState([]);
  // const [selectedTerm, setSelectedTerm] = useState(undefined);

  // useEffect(() => {
  //   async function fetchData() {
  //     const termsData = await fetchTerms();
  //     setTerms(termsData.map((t) => t.name));
  //     setSelectedTerm(termsData[0]?.name);
  //   }
  //   fetchData();
  // }, []);

  // return { terms, selectedTerm, setSelectedTerm };
}