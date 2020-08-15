import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { doDeletePhoto } from "../store/actions/photos";

const DeleteComponent = styled(Button)`
  float: right;
`;

const DeleteButton = (props) => {
  const deleteText = `Delete ${props.howManyPhotos || ""} photos`.trim();
  const dispatch = useDispatch();

  const deleteImage = () => {
    dispatch(doDeletePhoto());
  };

  return (
    <DeleteComponent
      onClick={deleteImage}
      type="text"
      icon={<DeleteOutlined />}
    >
      {deleteText}
    </DeleteComponent>
  );
};

export default DeleteButton;
