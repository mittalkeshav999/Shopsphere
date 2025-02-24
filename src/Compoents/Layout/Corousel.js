import React, { useEffect, useState } from "react";
import c1 from "../../Assets/images/c1.png";
import c2 from "../../Assets/images/c2.png";
import c3 from "../../Assets/images/c3.png";
import c4 from "../../Assets/images/c4.png";
import "../CommonStyle.css"

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
    (<div className="carousel-container text-center position-relative overflow-hidden">
      <div className="position-relative overflow-hidden">
        <div
          className={` slider translate-${index}`}>
          {images.map((img, i) => (
            <img key={i} src={img} alt="carousel" className="w-100 f_s0"  />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 overflow-hidden">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded mx-1 w5 h5 cursorPointer ${index === i ? "bg-dark scale-125" : "bg-dark-subtle"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>)
  );
}
