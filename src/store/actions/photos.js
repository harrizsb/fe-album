import {
  SET_HOW_MANY_PHOTOS,
  SET_PHOTO_LIST,
  SET_CHECKBOX_PHOTOS,
  UNSET_CHECKBOX_PHOTOS,
  SET_CURRENT_PAGE,
} from "../action_types/photos";
import { TOGGLE_AJAX_REQUEST } from "../action_types/ui";
import { fetchPhotos, deletePhoto } from "../../api/photos";

export const setHowManyPhotos = (payload) => {
  return {
    type: SET_HOW_MANY_PHOTOS,
    payload,
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const checkboxPhotos = ({ type, id }) => {
  const reduxType = type ? SET_CHECKBOX_PHOTOS : UNSET_CHECKBOX_PHOTOS;

  return {
    type: reduxType,
    payload: id,
  };
};

export const toggleAjax = () => (dispatch) =>
  dispatch({ type: TOGGLE_AJAX_REQUEST });

export const fetchPhotoList = () => (dispatch, state) => {
  const {
    photos: { howManyPhotos, currentPage },
  } = state();

  const offsetPaging = (currentPage - 1) * howManyPhotos;

  toggleAjax();

  fetchPhotos({
    skip: offsetPaging,
    limit: howManyPhotos,
  })
    .then(({ data: { documents, count } }) => {
      dispatch({ type: SET_PHOTO_LIST, payload: { documents, count } });
    })
    .catch(() => {
      dispatch({ type: SET_PHOTO_LIST, payload: "error" });
    })
    .finally(() => {
      toggleAjax();
    });
};

export const doDeletePhoto = () => (dispatch, state) => {
  const {
    photos: { checkedPhotos, photoList },
  } = state();

  toggleAjax();

  const request = checkedPhotos.map((val) => {
    const { album, name } = photoList.find((x) => x.id === val);
    return deletePhoto(album, name);
  });

  Promise.all(request)
    .then(() => {
      toggleAjax();
    })
    .finally(() => {
      dispatch(fetchPhotoList());
    });
};
