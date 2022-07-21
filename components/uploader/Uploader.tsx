import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Image as AntImage } from "antd";
import ImgCrop from "antd-img-crop";
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload/interface";
import React, { useState } from "react";
import { Button } from "../button/Button";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const Uploader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setImage] = useState<UploadFile>({
    uid: "-1",
    name: "notexist1.png",
    status: "done",
    url: "img/notexist1.png",
  });

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const [imageUrl, setImageUrl] = useState<string>();

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

  const onChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
        setImage(info.file);
      });
    }

    if (info.fileList.length > 3) {
      setFileList(fileList);
    }
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

  const handleClick = (event: any) => {
    event.preventDefault();
    onPreview(selectedImage);
    // console.log(selectedImage);
  };

  return (
    <>
      <AntImage src={selectedImage.url} alt="your new image" />

      <ImgCrop rotate>
        <Upload
          accept="jpeg,png,webp,jpg"
          action={`${process.env.PYTHON_PUBLIC_API_URL}/face`}
          listType="picture-card"
          fileList={fileList}
          showUploadList={true}
          onChange={onChange}
          onPreview={onPreview}
          maxCount={3}
        >
          {fileList.length < 3 && "+ Upload"}
        </Upload>
      </ImgCrop>
      {/* TODO: onclick should trigger modal with consent */}
      <Button
        target="_self"
        href="#ant-image-mask"
        className="block"
        onClick={(e) => handleClick(e)}
      >
        Submit
      </Button>
    </>
  );
};
