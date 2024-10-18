import post from "../../assets/post_1.jpg";
import RecentPost from "../Post/RecentPost";
const Home = () => {
  return (
    <>
      <div className=" w-full  pt-10 lg:w-[1080px] mx-auto">
        <div className="grid grid-cols-2 justify-center">
          <div className="w-full max-w-2xl rouded-xl">
            <img src={post} alt="post" className="rounded-xl" />
            <div className="py-2">
              <a href="" className="text-2xl font-normal font-inter">
                VR Is the Use of Computer Technology to Create a Simulated Environment.
              </a>
            </div>
          </div>
          <div className=" px-5">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black font-inter">Recent News</h3>
              <a href="" className="text-[16px] font-semibold text-black font-inter">
                ALL RECENT NEWS
              </a>
            </div>
            <div className="recentPost">
              <RecentPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
