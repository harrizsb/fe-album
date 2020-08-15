import { TOGGLE_AJAX_REQUEST } from "../action_types/ui";

const initialState = {
  ajaxRequest: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_AJAX_REQUEST: {
      return {
        ...state,
        ajaxRequest: !state.ajaxRequest,
      };
    }

    default: {
      return state;
    }
  }
};
