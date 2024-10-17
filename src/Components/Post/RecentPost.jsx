const RecentPost = ({ id, postTitle, postImage, postName }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 py-4">
        <div className="w-full max-w-36">
          <img src={postImage} alt="" className=" w-full h-full object-cover" />
        </div>
        <div>
          <span className="bg-red-600 text-white px-4 font-inter text-base py-1">Food</span>
          <h3 className="text-lg font-medium font-inter py-4">{title}</h3>
          <h4 className="text-base font-normal font-inter">{postName}</h4>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
