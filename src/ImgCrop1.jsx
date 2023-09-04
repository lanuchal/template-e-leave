import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import imglyRemoveBackground from "@imgly/background-removal";

function ImgCrop1() {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const [isLoadding, setIsLoadding] = useState(false);

  const convertBase64Image = (image_src) => {
    setIsLoadding(true);
    imglyRemoveBackground(image_src)
      .then((blob) => {
        // The result is a blob encoded as PNG. It can be converted to an URL to be used as HTMLImage.src
        //   const url = URL.createObjectURL(blob);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64Result = reader.result;
          console.log("รหัส base64 ของรูปภาพที่ลบพื้นหลังแล้ว:", base64Result);
          setIsLoadding(false);
        };
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการลบพื้นหลัง:", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const dataCropImg = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      setCroppedImage(dataCropImg);
      convertBase64Image(dataCropImg);
      //   console.log();
    }
  };

  return (
    <div>
      <h1>Image Cropper</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <Cropper
            ref={cropperRef}
            src={image}
            style={{ height: 400, width: "100%" }}
            aspectRatio={4 / 3}
            guides={true}
            viewMode={1}
            dragMode="move"
            scalable={true}
            cropBoxMovable={true}
            cropBoxResizable={true}
          />
        </div>
      )}
      <div>
        <button onClick={handleCrop}>Crop Image</button>
      </div>
      {isLoadding ? "load" : "success"}
    </div>
  );
}

export default ImgCrop1;
