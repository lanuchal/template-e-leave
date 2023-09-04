import React from "react";

export const getCroppedImg = async (imageSrc, crop) => {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size to the final cropped size
  canvas.width = crop.width;
  canvas.height = crop.height;

  // Crop the image on the canvas
  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    // Convert the canvas to a Blob
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }

        // Create an object URL from the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Resolve with the object URL
        resolve(blobUrl);
      },
      "image/jpeg", // You can change the format here (e.g., image/png)
      1 // Image quality (1 = maximum quality)
    );
  });
};
