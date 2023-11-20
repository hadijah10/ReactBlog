import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export const getUsers = async () => {
  const userCollectionRef = collection(db, "posts");

  return await getDocs(userCollectionRef);
};

