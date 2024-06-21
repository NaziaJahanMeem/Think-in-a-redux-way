export const Buttons = ({ likes, isSaved }) => {
  return (
    <div class="btn-group">
      {/* <!-- handle like on button click --> */}
      <button class="like-btn" id="lws-singleLinks">
        <i class="fa-regular fa-thumbs-up"></i> {likes}
      </button>
      {/* <!-- handle save on button click --> */}
      {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
      {isSaved ? (
        <button class="active save-btn" id="lws-singleSavedBtn">
          <i class="fa-regular fa-bookmark"></i> Saved
        </button>
      ) : null}
    </div>
  );
};
