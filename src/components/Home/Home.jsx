import Blogs from "../Blogs/Blogs";

function Home() {
  return (
    <div>
      <div className="mx-4  bg-gray-200 rounded-2xl overflow-hidden lg:h-[500px]">
        <img
          src="/gemini-images/gemini-remove.png"
          alt="Gemini"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* 
Blog Ares */}

      <div>
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
