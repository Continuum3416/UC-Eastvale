import React from "react";

const alumniImages = [
  "einstein.jpg",
  "jfk.jpg",
  "obama.webp",
  "planck.jpg",
  "portman.webp",
  "van_gogh.jpg",
  "mark.webp",
  "jobs.webp",
  "xi.webp",
  "john_adams.jpg",
];

const AlumniGrid = () => {
  return (
    <>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {alumniImages.map((imgName) => (
          <div
            key={imgName}
            className="aspect-square rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={`/alumni/${imgName}`}
              alt={`Alumni ${imgName.split(".")[0]}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AlumniGrid;