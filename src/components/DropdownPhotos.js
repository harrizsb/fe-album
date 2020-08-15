import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import styled from "@emotion/styled";

import { getHowManyPhotos } from "../store/selectors/photos";
import { setHowManyPhotos } from "../store/actions/photos";

const DropdownComponents = styled(Select)`
  & > .ant-select-selector {
    border: none !important;
  }
`;

const DropdownPhotos = () => {
  const howManyPhotos = useSelector(getHowManyPhotos);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setHowManyPhotos(e));
  };

  return (
    <DropdownComponents onChange={onChange} defaultValue={howManyPhotos}>
      {[5, 10, 25].map((val) => {
        return (
          <Select.Option value={val} key={val}>
            {val}
          </Select.Option>
        );
      })}
    </DropdownComponents>
  );
};

export default DropdownPhotos;
