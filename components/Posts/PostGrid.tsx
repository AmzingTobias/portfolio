import PostCard, { PostCardInfo } from "@/components/Posts/PostCard";

const PostGrid: React.FC<{ posts: PostCardInfo[]; displayTags: boolean }> = ({
  posts,
  displayTags,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-3 xl:gap-x-8 2xl:gap-x-6 2xl:grid-cols-4">
      {posts.map((post, index) => {
        return (
          <div className="w-full flex grow" key={index}>
            <PostCard postcard={post} displayTag={displayTags} />
          </div>
        );
      })}
    </div>
  );
};

export default PostGrid;
