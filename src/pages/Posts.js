import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { DetailedPost } from "../components/detailedpost/DetailedPost";
import { RelatedPosts } from "../components/relatedPosts/RelatedPosts";
import { fetchDetailedPost } from "../features/detailedPost/detailedPostSlice";

export const Posts = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { detailedPost } = useSelector((store) => store.detailedPost);

  useEffect(() => {
    dispatch(fetchDetailedPost(postId));
  }, [dispatch, postId]);

  return (
    <section class="post-page-container">
      <DetailedPost detailedPost={detailedPost} />
      <RelatedPosts />
    </section>
  );
};
