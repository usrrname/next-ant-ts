import { Upload } from "antd";
import { Image as AntImage } from "antd";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";
import { Button } from "../button/Button";

const UploadWithCrop: React.FC = () => {
  const [selectedImage, setImage] = useState<UploadFile>({
    uid: "-1",
    name: "notexist1.png",
    status: "done",
    url: "img/notexist1.png",
  });

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "notexist1.png",
      status: "done",
      url: "img/notexist1.png",
    },
    {
      uid: "-2",
      name: "notexist2.jpeg",
      status: "done",
      url: "img/notexist2.jpeg",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    setImage(file);
  };

  const handleClick = () => {
    console.log(selectedImage);
  };

  return (
    <>
      <AntImage src={selectedImage.url} alt="your new image" />

      <ImgCrop rotate>
        <Upload
          action="api/faces"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 4 && "+ Upload"}
        </Upload>
      </ImgCrop>
      {/* TODO: onclick should trigger modal with consent */}
      <Button
        target="_self"
        className="block"
        href="#"
        onClick={() => handleClick}
      >
        Submit
      </Button>
    </>
  );
};

export default UploadWithCrop;
