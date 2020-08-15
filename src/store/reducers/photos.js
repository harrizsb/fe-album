import {
  SET_HOW_MANY_PHOTOS,
  SET_PHOTO_LIST,
  SET_CHECKBOX_PHOTOS,
  UNSET_CHECKBOX_PHOTOS,
  SET_CURRENT_PAGE,
} from "../action_types/photos";

const initialState = {
  howManyPhotos: 25,
  photoList: [],
  checkedPhotos: [],
  totalPhoto: 0,
  currentPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOW_MANY_PHOTOS: {
      // reset when changing page size
      return {
        ...state,
        howManyPhotos: action.payload,
        currentPage: 1,
        checkedPhotos: [],
      };
    }

    case SET_CHECKBOX_PHOTOS: {
      return {
        ...state,
        checkedPhotos: [...state.checkedPhotos, action.payload],
      };
    }

    case UNSET_CHECKBOX_PHOTOS: {
      return {
        ...state,
        checkedPhotos: state.checkedPhotos.filter(
          (val) => val !== action.payload
        ),
      };
    }

    case SET_PHOTO_LIST: {
      const { documents } = action.payload;
      return {
        ...state,
        photoList: documents,
        totalPhoto: 50,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
