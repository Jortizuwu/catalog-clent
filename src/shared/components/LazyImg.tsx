import React, { useState, useEffect, useRef } from 'react';
import { ColorExtractor } from 'react-color-extractor';

const LazyImage = ({ src }) => {
  const imgRef = useRef();

  const [colors, setColors] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch(src);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageSrc(imageUrl);
    };
    loadImage();
  }, [src]);

  useEffect(() => {
    setColors(colors);
  }, [colors]);

  const handleColors = (colors) => {
    setColors(colors);
  };

  return (
    <div>
      <ColorExtractor
        src={
          imageSrc ||
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
        getColors={handleColors}
      />

      <img
        ref={imgRef}
        loading="lazy"
        src={
          imageSrc ||
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
        className="h-64 lg:h-[500px] z-50 mx-auto"
        style={{
          opacity: imageSrc ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          objectFit: 'contain',
          position: 'relative',
          boxShadow: `400px 0px 0px 0px ${colors[0]}, 0px 0px 400px ${colors[5]}`,
        }}
        onLoad={() => {
          setImageSrc(src);
        }}
      />
    </div>
  );
};

export default LazyImage;
