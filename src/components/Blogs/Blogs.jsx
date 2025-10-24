import { useState } from "react";
import CopyList from "../CopyText/CopyText";

function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "/blog-images/blogs1.png",
      para: "Create a photo-realistic 8K full-body portrait of a confident man leaning casually against a clean light-gray wall, hands in his pockets and one leg crossed over the other, exuding a relaxed yet self-assured presence. The lighting should be bright, even, and professional, reflecting a clean modern studio environment. On the wall beside him, feature a bold black-and-white stylized vector portrait of the same man with sleek geometric shapes and modern design elements. Beneath the vector artwork, place the text 'Expert Work' in large, clean bold letters, and below that, write “Facebook: expertWork” in a smaller minimalist font. The overall aesthetic should be modern, minimalistic, and premium — ideal for personal branding with a creative, tech-inspired edge.",
    },
    {
      id: 2,
      image: "/blog-images/Gemini_Generated.png",
      para: " A photorealistic, sun-drenched lifestyle photograph of a stylish handsome and athletic young man, 24 year old, in last 24s with stylish brown hair and well groomed beard. He is captured mid-action in a crystal-clear swimming pool, looking intensely andconfidently at the camera as he runs a hand through his hair.Dynamic splashes of water freeze in the air around him, glistening under the bright direct sunlight",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed: ", err);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-semibold lg:text-3xl text-2xl my-5  lg:my-10">
          Google Gemini - Best Professional Ai Photo Editors
        </h3>

        {blogs.map((blog) => (
          <div key={blog.id} className="mb-20 ">
            <img
              className="w-[500px] h-[570px] mx-auto mt-2 rounded-lg"
              src={blog.image}
              alt=""
            />

            <div className="lg:mx-36 pt-1">
              <span className="text-gray-700 line-clamp-2 text-[14px]">
                {blog.para}
              </span>
              <button
                onClick={() => handleCopy(blog?.para, blog.id)}
                className={` mt-1 px-4 py-1 rounded-md text-sm cursor-pointer font-medium text-white transition-all duration-300 ${
                  copiedIndex === blog.id
                    ? "bg-green-500"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {copiedIndex === blog.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
