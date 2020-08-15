import React, { useState } from "react";
import { Modal, Button, Select, Upload, message } from "antd";
import { CloudUploadOutlined, InboxOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import { apiUrl } from "../api/config";

const AppUploadModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 0;
`;

const AppUploadModal = () => {
  const [modalVisible, setModalVisibility] = useState(false);
  const [album, setAlbum] = useState("Travel");
  const props = {
    name: "documents",
    multiple: true,
    action: `${apiUrl}`,
    method: "put",
    data: {
      album,
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Button
        type="text"
        icon={<CloudUploadOutlined />}
        onClick={() => {
          setModalVisibility(!modalVisible);
        }}
      >
        Upload
      </Button>
      <Modal
        title="Upload photos"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisibility(!modalVisible)}
      >
        <Upload.Dragger multiple accept="image/*" {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
        <AppUploadModalFooter>
          <Select defaultValue={album} onChange={(e) => setAlbum(e)}>
            {["Travel", "Personal", "Food", "Nature", "Other"].map((val) => {
              return (
                <Select.Option key={val} value={val}>
                  {val}
                </Select.Option>
              );
            })}
          </Select>
          <Button type="text" icon={<CloudUploadOutlined />}>
            Upload
          </Button>
        </AppUploadModalFooter>
      </Modal>
    </>
  );
};

export default AppUploadModal;
