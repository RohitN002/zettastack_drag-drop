"use client";

import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}{" "}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#1f2937",
            color: "#fff",
          },
        }}
      />
    </Provider>
  );
}
