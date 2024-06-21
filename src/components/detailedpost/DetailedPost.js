import { Buttons } from "./Buttons";

export const DetailedPost = ({ detailedPost }) => {
  const { id, title, description, image, likes, isSaved, tags } = detailedPost;

  return (
    <main class="post">
      <img src={image} alt={title} class="w-full rounded-md" id={id} />
      <div>
        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div class="tags" id="lws-singleTags">
          {tags && tags.map((tag) => <span>#{tag}</span>)}
        </div>
        <Buttons likes={likes} isSaved={isSaved} />
        <div class="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};
