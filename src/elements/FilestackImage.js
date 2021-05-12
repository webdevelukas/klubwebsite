import React from "react";
import ResponsiveImage from "./ResponsiveImage";
const widths = [
  180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808,
  3024,
];
function FilestackImage({ src, children, ...rest }) {
  const imageID = src.split("/")[3];
  return (
    <ResponsiveImage
      {...rest}
      srcSet={`${widths.map(
        (width) =>
          `https://media.graphcms.com/resize=w:${width}/${imageID} ${width}w`
      )}`}
      sizes="60vw"
    />
  );
}
export default FilestackImage;
