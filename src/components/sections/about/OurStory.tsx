import careerFormBg from "@/assets/about.png";

export default function AboutOurStory() {
  return (
    <section className="relative w-full bg-white overflow-visible">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* Left Column: Image (Taller than the blue section next to it) */}
        <div className="w-full md:w-[45%] h-[350px] md:h-[600px] relative z-20">
          <img
            src={careerFormBg}
            alt="Our Story"
            className="w-full h-full object-cover shadow-xl"
          />
        </div>

        {/* Right Column: Blue Section (Starts exactly where the image ends) */}
        <div className="w-full md:w-[55%] bg-linear-to-br from-blue-900 via-blue-950 to-indigo-950 text-white py-16 px-8 md:py-20 md:px-16 flex flex-col justify-center items-center text-center relative z-10 self-center">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-blue-200/80 font-bold">
              Our Story
            </span>

            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl text-white">
              Practical innovation for{" "}
              <span className="text-blue-400 font-bold">complex workflows.</span>
            </h2>

            <div className="mt-6 text-lg md:text-xl font-medium text-blue-200 tracking-tight leading-relaxed border-y border-blue-500/20 py-4 my-6">
              "Technology should solve real operational problems, not create new ones."
            </div>

            <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed text-blue-100/90">
              <p>
                DZ Infotech was founded with the vision of solving real operational problems using
                technology. We focus on building practical, scalable solutions that help businesses
                gain control, visibility, and efficiency.
              </p>
              <p>
                The idea for our flagship platform came directly from observing the daily struggles
                contractors face on site. We realized that digital transformation isn't just about
                moving to the cloud; it's about making work easier for the person on the ground.
              </p>
              <p>
                Today, we are expanding that mindset to other sectors, building an ecosystem of
                tools designed for the modern industrial age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
