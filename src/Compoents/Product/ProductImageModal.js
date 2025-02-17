import React from 'react'
import { useState, useRef } from "react";


export default function ProductImageModal(props) {
    const [selectedImage, setSelectedImage] = useState(props.prod.images[0]);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(null);

  // Handle Mouse Move for Zoom Effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

    return (
        <div className="container mt-4">
      <div className="row">
        {/* Thumbnail List (Left Side) */}
        <div className="col-md-2 d-flex flex-column gap-2">
          {props.prod.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`img-thumbnail ${
                selectedImage === img ? "border-primary" : "border-0"
              }`}
              onMouseEnter={() => setSelectedImage(img)}
              style={{ cursor: "pointer", width: "50px" }}
            />
          ))}
        </div>

        {/* Main Image (Middle) */}
        <div className="col-md-10 position-relative">
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid rounded shadow-lg"
            style={{ width: "80%", maxHeight:"85vh"}}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => (zoomRef.current.style.display = "block")}
            onMouseLeave={() => (zoomRef.current.style.display = "none")}
          />

          {/* Zoomed Image on Right Side */}
          <div
            ref={zoomRef}
            className="zoom-box border"
            style={{
              display: "none",
              position: "absolute",
              top: "0",
              left: "34vw",
              width: "54vw",
              height: "110vh",
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: "1000px", // Adjust zoom level
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
    );
}
