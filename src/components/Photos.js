import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import styled from "@emotion/styled";

import { checkboxPhotos } from "../store/actions/photos";

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

const PhotosWrapper = styled.div`
  position: relative;
  padding: 0 8px;
`;

const PhotosCheckbox = styled(Checkbox)`
  position: absolute;
  left: 10px;
  top: 0;
`;

const PhotosDescription = styled.div`
  font-weight: ${(props) => (props.strong ? "bold" : "normal")};
  display: block;
  text-align: center;
`;

const Photos = (props) => {
  const state = useSelector((state) => state.photos.checkedPhotos);
  const dispatch = useDispatch();

  const checkedValue = (id) => {
    return state.find((val) => val === id);
  };

  const onCheck = (e, id) => {
    dispatch(checkboxPhotos({ type: e.target.checked, id }));
  };

  return (
    <PhotosWrapper>
      {props.imgPath && (
        <>
          <PhotosCheckbox
            onChange={(event) => onCheck(event, props.id)}
            checked={checkedValue(props.id)}
          />
          <div>
            <Img src={props.imgPath} />
            <PhotosDescription strong>{props.name}</PhotosDescription>
            <PhotosDescription>{props.album}</PhotosDescription>
          </div>
        </>
      )}
    </PhotosWrapper>
  );
};

export default Photos;
