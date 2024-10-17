import post from "../../assets/post_1.jpg";
import post7 from "../../assets/post_7.jpg";
import post8 from "../../assets/post_8.jpg";
import post9 from "../../assets/post_9.jpg";
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
              <div className="flex justify-between items-center gap-2 py-4">
                <div className="w-full max-w-36">
                  <img src={post7} alt="" className=" w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-red-600 text-white px-4 font-inter text-base py-1">Food</span>
                  <h3 className="text-lg font-medium font-inter py-4">
                    Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries
                  </h3>
                  <h4 className="text-base font-normal font-inter">ByXu Jianhong</h4>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 py-4">
                <div className="w-full max-w-36">
                  <img src={post8} alt="" className=" w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-red-600 text-white px-4 font-inter text-base py-1">Food</span>
                  <h3 className="text-lg font-medium font-inter py-4">
                    Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries
                  </h3>
                  <h4 className="text-base font-normal font-inter">ByXu Jianhong</h4>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 py-4">
                <div className="w-full max-w-36">
                  <img src={post9} alt="" className=" w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-red-600 text-white px-4 font-inter text-base py-1">Food</span>
                  <h3 className="text-lg font-medium font-inter py-4">
                    Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries
                  </h3>
                  <h4 className="text-base font-normal font-inter">ByXu Jianhong</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
