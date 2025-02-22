import React, { useEffect, useState } from "react";
import c1 from "../../Assets/images/c1.png";
import c2 from "../../Assets/images/c2.png";
import c3 from "../../Assets/images/c3.png";
import c4 from "../../Assets/images/c4.png";

const images = [c1, c2, c3, c4];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const Right = () => {
    setIndex((index + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Right();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="carousel-container text-center position-relative overflow-hidden">

        <div className="position-relative overflow-hidden">
          <div
            className="d-flex"
            style={{
              width: `100%`,
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {images.map((img, i) => (
              <img key={i} src={img} alt="carousel" style={{ width: "100%", flexShrink: 0 }} />
            ))}
          </div>
        </div>

      <div style={{ overflow: "hidden" }} className="d-flex justify-content-center mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            style={{ width: "5px", height: "5px", display: "inline-block", cursor: "pointer" }}
            className={`rounded mx-1 ${index === i ? "bg-dark scale-125" : "bg-dark-subtle"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
