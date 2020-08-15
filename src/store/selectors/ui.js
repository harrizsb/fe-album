import { createSelector } from "reselect";

const uiState = ({ ui }) => ui;

export const isAjaxRequest = createSelector(
  uiState,
  (state) => state.ajaxRequest
);
