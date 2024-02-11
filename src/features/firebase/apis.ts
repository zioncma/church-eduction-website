import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import db from './Firebase';

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
