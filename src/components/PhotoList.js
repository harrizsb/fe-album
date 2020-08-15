import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Skeleton } from "antd";

import AppPagination from "./AppPagination";
import Photos from "./Photos";

import { fetchPhotoList, setCurrentPage } from "../store/actions/photos";
import {
  getPhotoList,
  getHowManyPhotos,
  getTotalPhoto,
  getCurrentPage,
} from "../store/selectors/photos";
import { isAjaxRequest } from "../store/selectors/ui";

const PhotoList = () => {
  const ajaxRequest = useSelector(isAjaxRequest);
  const photoList = useSelector(getPhotoList);
  const howManyPhotos = useSelector(getHowManyPhotos);
  const totalPhoto = useSelector(getTotalPhoto);
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const pageChange = (currentPage) => dispatch(setCurrentPage(currentPage));

  useEffect(() => {
    dispatch(fetchPhotoList());
  }, [howManyPhotos, currentPage, dispatch]);

  return ajaxRequest ? (
    <Skeleton active />
  ) : (
    <div>
      <Row align="middle">
        {Array.isArray(photoList) ? (
          <>
            {photoList.map((val) => {
              return (
                <Col xs={6} key={val.id}>
                  <Photos
                    imgPath={val.raw}
                    album={val.album}
                    name={val.name}
                    id={val.id}
                  />
                </Col>
              );
            })}
            <Col xs={24}>
              <AppPagination
                currentPage={currentPage}
                onChange={pageChange}
                responsive
                total={totalPhoto}
                pageSize={howManyPhotos}
              />
            </Col>
          </>
        ) : (
          <p>No photo's found</p>
        )}
      </Row>
    </div>
  );
};

export default PhotoList;
