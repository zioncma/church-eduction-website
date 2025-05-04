import db from './Firebase';
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc, getDoc
} from "firebase/firestore";

const collectionName = 'courses';
const pathSegment = 'pS4uRUtiS617BbVRdFaf';

/**
 *
 */
export async function fetchCourses() {
  const docRef = doc(db, collectionName, pathSegment);
  const docSnap = await getDoc(docRef);
  const result = docSnap.data();

  // const querySnapshot = await getDocs(collection(db, collectionName));
  // const { docs } = querySnapshot || {};
  // const result = docs.map((doc) => ({
  //   ...doc.data(),
  //   id: doc.id,
  // }));
  console.log('fetched courses', result);

  return result;
}


export async function fetchTerms() {
  const querySnapshot = await getDocs(
    query(collection(db, "terms"), orderBy("index", "desc"))
  );
  const termsData = querySnapshot.docs.map((doc) => doc.data());
  return termsData;
}
