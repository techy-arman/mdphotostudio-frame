import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';

// This file is used to generate the camera favicon SVG
// Run this once to generate the SVG, then convert to .ico format

const CameraIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      style={{ backgroundColor: '#b5554d' }}
    >
      <g transform="translate(4, 4) scale(0.75)">
        <FaCamera color="white" size={32} />
      </g>
    </svg>
  );
};

// To generate SVG string for conversion to favicon
const svgString = encodeURIComponent(
  renderToStaticMarkup(<CameraIcon />)
);

console.log(`SVG Data URL:
data:image/svg+xml,${svgString}
`);

export default CameraIcon; 