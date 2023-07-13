import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawMenuIsOpen: false,
  createPublicationIsOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    handelCreatePublicationModal: (state) => {
      state.createPublicationIsOpen = !state.createPublicationIsOpen;
    },
    dropMenuAction: (state, action) => {
      // console.log(action)
      state.drawMenuIsOpen = !state.drawMenuIsOpen;
      if (action.payload === false) {
        state.drawMenuIsOpen = false;
      }
    },
  },
});

export const { dropMenuAction, handelCreatePublicationModal } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
