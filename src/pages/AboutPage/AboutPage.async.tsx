import { lazy } from "react";

// нельзя так делать!!:
export const AboutPageAsync = lazy(() => new Promise(res => {
  setTimeout(() => {
    import('./AboutPage');
  }, 1500);
}));