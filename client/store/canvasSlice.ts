// store/canvasSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { CanvasItem } from "./types";

interface HistoryState {
  past: CanvasItem[][];
  present: CanvasItem[];
  future: CanvasItem[][];
  maxZIndex: number;
}

const initialState: HistoryState = {
  past: [],
  present: [],
  future: [],
  maxZIndex: 0,
};

const slice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    bringToFront: (state, action: PayloadAction<string>) => {
      const item = state.present.find((i) => i.id === action.payload);
      console.log("bring to front", JSON.stringify(item));
      if (!item) return;

      state.maxZIndex += 1;
      item.zIndex = state.maxZIndex;
    },
    addItem: (state, action: PayloadAction<Partial<CanvasItem>>) => {
      state.past.push(state.present);
      state.present = [
        ...state.present,
        {
          id: nanoid(),
          width: 150,
          height: 60,
          zIndex: state.maxZIndex + 1,
          ...action.payload,
        } as CanvasItem,
      ];
      state.future = [];
    },

    updateItem: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<CanvasItem> }>,
    ) => {
      state.past.push(state.present);
      state.present = state.present.map((i) =>
        i.id === action.payload.id ? { ...i, ...action.payload.updates } : i,
      );
      state.future = [];
    },

    deleteItem: (state, action: PayloadAction<string>) => {
      state.past.push(state.present);
      state.present = state.present.filter((i) => i.id !== action.payload);
      state.future = [];
    },

    undo: (state) => {
      if (!state.past.length) return;
      const previous = state.past.pop()!;
      state.future.unshift(state.present);
      state.present = previous;
    },

    redo: (state) => {
      if (!state.future.length) return;
      const next = state.future.shift()!;
      state.past.push(state.present);
      state.present = next;
    },
  },
});

export const { addItem, updateItem, deleteItem, undo, redo, bringToFront } =
  slice.actions;
export default slice.reducer;
