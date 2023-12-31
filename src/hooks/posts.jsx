import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import {
  setDoc,
  doc,
  collection,
  query,
  orderBy,
  arrayRemove,
  updateDoc,
  getDocs,
  arrayUnion,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useToast } from "@chakra-ui/react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      date: Date.now(),
      likes: [],
    });
    toast({
      title: "Post added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
    setLoading(false);
  }
  return { addPost, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(
        collection(db, "posts"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);
  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  }
  return { toggleLike, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function deletePost() {
    if (pathname.startsWith("/protected/comments")) navigate(-1);

    const res = window.confirm("Are you sure you want to delete this post?");
    if (res) {
      setLoading(true);

      await deleteDoc(doc(db, "posts", id));

      const q = query(collection(db, "comments"), where("postID", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      toast({
        title: "Post deleted!",
        status: "info",
        isClosable: true,
        position: "top",
        duration: 5000,
      });

      setLoading(false);
    }
  }

  return { deletePost, isLoading };
}

export function usePost(id) {
  const q = doc(db, "posts", id);
  const [post, isLoading] = useDocumentData(q);

  return { post, isLoading };
}

// export function usePosts() {
//     const q = query(collection(db, 'posts'), orderBy('posts', 'desc'));
//     const [posts, isLoading, error] = useCollectionData(q);
//     if (error) throw error;
//     return { posts, isLoading };
// }
