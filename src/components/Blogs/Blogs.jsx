function Blogs() {
  return (
    <>
      <div>
        <h3 className="font-semibold text-3xl  my-10">
          Google Gemini - Best Professional Ai Photo Editor
        </h3>

        {/* //01 blogs */}

        <div className="mb-20 ">
          <img
            className="w-[500px] h-[570px] mx-auto mt-2 rounded-lg"
            src="/public/blog-images/blog2.jpg"
            alt=""
          />
          {/* Dynamic Ai */}
          <div>
            <p className="lg:mx-24 mt-2.5 text-sm font-semibold">
              Create a photo-realistic 8K full-body portrait of a confident man
              leaning casually against a clean light-gray wall, hands in his
              pockets and one leg crossed over the other, exuding a relaxed yet
              self-assured presence. The lighting should be bright, even, and
              professional, reflecting a clean modern studio environment. On the
              wall beside him, feature a bold black-and-white stylized vector
              portrait of the same man with sleek geometric shapes and modern
              design elements. Beneath the vector artwork, place the text
              “Expert Mistry” in large, clean bold letters, and below that,
              write “Facebook: @expertmistry” in a smaller minimalist font. The
              overall aesthetic should be modern, minimalistic, and premium —
              ideal for personal branding with a creative, tech-inspired edge.
            </p>
          </div>
        </div>
        {/* // 02 blogs */}
        <div className="mb-20 ">
          <img
            className="w-[500px] h-[560px] mx-auto mt-2 rounded-lg"
            src="/public/blog-images/Gemini_Generated.png"
            alt=""
          />

          <div>
            <p className="lg:mx-24 mt-2.5 text-sm font-semibold">
              A photorealistic, sun-drenched lifestyle photograph of a stylish
              handsome and athletic young man, 24 year old, in last 24s with
              stylish brown hair and well groomed beard. He is captured
              mid-action in a crystal-clear swimming pool, looking intensely and
              confidently at the camera as he runs a hand through his hair.
              Dynamic splashes of water freeze in the air around him, glistening
              under the bright direct sunlight
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
