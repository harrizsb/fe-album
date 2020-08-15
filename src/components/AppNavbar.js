import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

import AppTitle from "./AppTitle";
import DeleteButton from "./DeleteButton";
import AppUploadModal from "./AppUploadModal";
import DropdownPhotos from "./DropdownPhotos";

import { countCheckedPhotos } from "../store/selectors/photos";

const Separator = () => {
  return (
    <Col xs={1}>
      <div style={{ textAlign: "center" }}>|</div>
    </Col>
  );
};

const renderDeleteButton = (countChecked) => {
  return countChecked > 0 ? (
    <>
      <Col xs={9}>
        <DeleteButton howManyPhotos={countChecked} />
      </Col>
      <Separator />
    </>
  ) : (
    <Col xs={10}>&nbsp;</Col>
  );
};

const AppNavbar = () => {
  const checkedPhotos = useSelector(countCheckedPhotos);

  return (
    <Row>
      <Col xs={18}>
        <AppTitle>photos</AppTitle>
      </Col>
      <Col xs={6}>
        <Row align="middle">
          {renderDeleteButton(checkedPhotos)}

          <Col xs={7}>
            <AppUploadModal />
          </Col>
          <Separator />
          <Col xs={6}>
            <DropdownPhotos />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AppNavbar;
