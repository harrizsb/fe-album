import { createSelector } from "reselect";

const photosState = ({ photos }) => photos;

export const getHowManyPhotos = createSelector(
  photosState,
  (state) => state.howManyPhotos
);

export const getPhotoList = createSelector(
  photosState,
  (state) => state.photoList
);

export const countCheckedPhotos = createSelector(
  photosState,
  (state) => state.checkedPhotos.length
);

export const getTotalPhoto = createSelector(
  photosState,
  (state) => state.totalPhoto
);

export const getCurrentPage = createSelector(
  photosState,
  (state) => state.currentPage
);
