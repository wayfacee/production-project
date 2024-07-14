import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* loading of chunks... */}
      <Routes>
        {routeConfig.map(({ path, element: Element }) =>
          <Route key={path} path={path} element={
            <div className="page-wrapper">
              <Element />
            </div>
          } />
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;