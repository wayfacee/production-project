import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React from "react";

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: "/about",
}

interface RouteConfigProps {
  path: string;
  element: React.ComponentType;
}

export const routeConfig: RouteConfigProps[] = [
  { path: RoutePath.main, element: MainPage },
  { path: RoutePath.about, element: AboutPage },
];