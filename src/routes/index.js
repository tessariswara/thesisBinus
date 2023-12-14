import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
const TenantManagement = React.lazy(() => import("../pages/tenantManagement"));
const DeviceManagement = React.lazy(() => import("../pages/deviceManagement"));
const Log = React.lazy(() => import("../pages/log"));
const Playground = React.lazy(() => import("../pages/playground"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/log" element={<Log />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/tenantmanagement" element={<TenantManagement />} />
          <Route path="/devicemanagement" element={<DeviceManagement />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
