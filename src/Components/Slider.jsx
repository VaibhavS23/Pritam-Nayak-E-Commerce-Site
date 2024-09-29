import { useState } from "react";

export const TestimonialSlider = ({ testimonials }) => {
  const [testIndex, setTestIndex] = useState(0);

  function showNextImage() {
    setTestIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setTestIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  }

  return (
    <section className="relative w-full h-96 mx-auto overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-500 max-w-4xl"
        style={{ transform: `translateX(-${testIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-full flex flex-col justify-center items-center p-8"
          >
            <p className="text-lg slidertxt">{item.text}</p>
            <p className="mt-4 font-medium sliderauthor">{item.author}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        onClick={showPrevImage}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md z-10"
        onClick={showNextImage}
      >
        &gt;
      </button>
    </section>
  );
};
