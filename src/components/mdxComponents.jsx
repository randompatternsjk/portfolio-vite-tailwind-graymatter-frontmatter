import React from "react";

export const MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="font-head text-fadedblack mt-15 mb-9 text-6xl font-bold uppercase"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="font-head mt-12 mb-4 text-4xl font-bold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-head mt-5 mb-3 text-2xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-md mb-4 leading-relaxed text-gray-900" {...props}>
      {children}
    </p>
  ),
  img: ({ src, alt, ...props }) => (
    <div className="my-6">
      <img
        src={src}
        alt={alt}
        className="mx-auto rounded-lg shadow-md"
        {...props}
      />
    </div>
  ),
  Research: ({ children }) => {
    const [image, ...content] = React.Children.toArray(children);

    return (
      <section className="border-fadedblack my-10 ml-4 flex h-full snap-start flex-col items-start gap-8 border-l-3 border-dotted p-4 align-middle sm:gap-4 md:flex-col lg:flex-row">
        <div className="text-balanced mx-auto flex-2 pl-8">{content}</div>

        <div className="flex-1">{image}</div>
      </section>
    );
  },

  Results: ({ children, color }) => {
    return (
      <section
        style={{ backgroundColor: color }}
        className="font-head my-8 snap-start rounded-lg p-6 text-4xl text-white uppercase"
      >
        {children}
      </section>
    );
  },

  FromTo: ({
    fromImage,
    toImage,
    fromCaption,
    toCaption,
    production,
    color,
  }) => {
    return (
      <div className="mx-auto my-16 flex w-full flex-col gap-12 lg:flex-row">
        {/* FROM Section */}
        <div className="flex flex-col items-center gap-4 text-center lg:w-1/3">
          <div className="font-head text-2xl font-bold text-gray-800 uppercase">
            From
          </div>
          <div
            className="h-40 w-40 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${fromImage})`,
            }}
          ></div>
          <div className="text-md leading-relaxed text-gray-700 italic">
            {fromCaption}
          </div>
        </div>

        {/* TO Section */}
        <div className="flex flex-col items-center gap-4 text-center lg:w-1/3">
          <div className="font-head text-2xl font-bold text-gray-800 uppercase">
            To
          </div>
          <div
            className="h-40 w-40 rounded-full bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: `url(${toImage})`,
            }}
          ></div>
          <div className="text-md leading-relaxed text-gray-700 italic">
            {toCaption}
          </div>
        </div>

        {/* VIA Section */}
        <div className="flex flex-col items-center gap-4 text-center lg:w-1/3">
          <div className="font-head text-2xl font-bold text-gray-800 uppercase">
            Via
          </div>
          <div
            className="font-head grid w-full grid-cols-1 gap-2 p-4 text-left text-sm font-semibold text-white uppercase shadow-lg sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: color }}
          >
            {production.split("\n").map((line, index) => (
              <div key={index} className="mb-2">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },

  Strategy: ({ columns }) => {
    return (
      <section className="border-fadedblack my-10 ml-4 flex h-full snap-start flex-col items-center gap-x-8 border-l-3 border-dotted align-middle sm:gap-4">
        <div className="border-fadedblack my-20 flex h-full snap-start flex-row items-center gap-4 border-l-1 border-dotted align-middle sm:gap-4 md:flex-col lg:flex-row">
          <div className="flex gap-4">
            {columns.map((column, index) => (
              <div
                key={index}
                className="border-offset-5 mx-auto flex h-full flex-col justify-end lg:w-1/3"
              >
                <div className="text-sm tracking-widest text-gray-500 uppercase underline">
                  {column.department}
                </div>
                <h2 className="font-head text-3xl uppercase">
                  {column.heading}
                </h2>
                <p className="text-balance">{column.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },

  Direction: ({ children, color }) => {
    const [image, ...content] = React.Children.toArray(children);

    return (
      <section className="border-fadedblack my-10 ml-4 flex h-full snap-start flex-col items-center gap-x-8 border-l-3 border-dotted align-middle sm:gap-4">
        {/* Left Column: Text Content */}
        <div className="border-offset-5 mx-auto pl-8">{content}</div>
        {/* Right Column: Image */}
        <div className="flex">{image}</div>
      </section>
    );
  },

  Production: ({ children, color }) => {
    const [image, ...content] = React.Children.toArray(children);

    return (
      <section className="border-fadedblack my-10 ml-4 flex h-full snap-start flex-col items-center gap-x-8 border-l-3 border-dotted align-middle sm:gap-4">
        {/* Left Column: Text Content */}
        <div className="border-offset-5 mx-auto pl-8">{content}</div>
        {/* Right Column: Image */}
        <div className="flex">{image}</div>
      </section>
    );
  },

  Callout: ({ children, type = "info" }) => {
    const colors = {
      research:
        "bg-red-100 border-red-500 text-red-800 border-b-4 border-dotted",
      strategy:
        "bg-yellow-100 border-yellow-500 text-yellow-800 border-r-4 border-dotted",
      direction:
        "bg-blue-100 border-blue-500 text-blue-800 border-l-4 border-dotted",
      production:
        "bg-green-100 border-green-500 text-green-800 border-t-4 border-dotted",
    };

    return (
      <div
        className={`min-h-40 w-full p-4 text-balance ${colors[type]} shadow-sm`}
      >
        {children}
      </div>
    );
  },

  VideoComponent: ({ thumb, video }) => {
    if (!thumb || !video) {
      console.error("VideoComponent requires both 'thumb' and 'video' props.");
      return null;
    }

    return (
      <div className="relative my-6 aspect-video">
        {/* Thumbnail Image */}
        <img
          src={thumb}
          alt="Video Thumbnail"
          className="absolute inset-0 h-full w-full cursor-pointer rounded-lg object-cover"
          onClick={(e) => {
            const thumbnail = e.target;
            const playIcon = thumbnail.nextSibling;
            const iframe = playIcon.nextSibling;

            if (thumbnail) thumbnail.style.display = "none"; // Hide the thumbnail
            if (playIcon) playIcon.style.display = "none"; // Hide the play icon
            if (iframe) iframe.style.display = "block"; // Show the video
          }}
        />

        {/* Play Icon */}
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
          onClick={(e) => {
            const playIcon = e.target;
            const iframe = playIcon.nextSibling;

            if (playIcon.previousSibling)
              playIcon.previousSibling.style.display = "none"; // Hide the thumbnail
            if (playIcon) playIcon.style.display = "none"; // Hide the play icon
            if (iframe) iframe.style.display = "block"; // Show the video
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-opacity-50 pointer-events-none h-16 w-16 rounded-full bg-black p-4 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Embedded YouTube Video */}
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 hidden h-full w-full rounded-lg"
        />
      </div>
    );
  },
};

Carousel: ({ images }) => {
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.error(
      "Carousel requires an 'images' prop with an array of image URLs.",
    );
    return null;
  }

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Image Display */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full object-cover"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="bg-opacity-50 hover:bg-opacity-75 absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black p-2 text-white"
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
