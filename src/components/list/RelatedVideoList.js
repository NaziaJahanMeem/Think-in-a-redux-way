import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "./../../features/relatedVideos/relatedVideoSlice";
import { Loading } from "../ui/Loading";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (store) => store.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content = null;
  if (isError) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedVideos?.length === 0)
    content = <div className="col-span-12">No videos found!</div>;

  if (!isError && !isLoading && relatedVideos?.length > 0)
    content = relatedVideos?.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));

  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
