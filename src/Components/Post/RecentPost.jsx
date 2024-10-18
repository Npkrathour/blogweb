import post7 from "../../assets/post_7.jpg";
import post8 from "../../assets/post_8.jpg";
import post9 from "../../assets/post_9.jpg";

const RecentPost = () => {
  const userData = [
    {
      postTitle: "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries",
      postName: "Chef John's Recipe",
      postImage: post7,
      bgColor: "bg-red-600",
      tagName: "Food",
    },
    {
      postTitle: "Get Around Easily With A New York Limousine Service",
      postName: "Healthy Meals",
      postImage: post8,
      bgColor: "bg-blue-600",
      tagName: "Nature",
    },
    {
      postTitle: "Kipchoge Proves He Has No Equal Runs 2nd Fastest Marathon Time In History",
      postName: "Best Eats",
      postImage: post9,
      bgColor: "bg-green-600",
      tagName: "cycle",
    },
  ];

  return (
    <>
      {userData.map(({ postTitle, postName, postImage, bgColor, tagName }, index) => (
        <div key={index} className="flex items-center gap-2 py-4">
          <div className="w-full max-w-36">
            <img src={postImage} alt={postTitle} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className={`${bgColor} text-white px-4 font-inter text-base py-1`}>{tagName}</span>
            <h3 className="text-lg font-medium font-inter py-4">{postTitle}</h3>
            <h4 className="text-base font-normal font-inter">{postName}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
