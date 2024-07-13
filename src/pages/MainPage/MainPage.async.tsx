import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
  setTimeout(() => {
    import('./MainPage');
  }, 1500);
}));