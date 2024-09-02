import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import { useAuth } from "../hooks/auth";
import routes from "./routes";
import Loader from "../components/ui/loader/Loader";
import AuthLayout from "../components/layouts/AuthLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import SlideIn from "./motions/SlideIn";

const RenderRoute = ({
  component: Component,
  layout,
  requiresAuth,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  let RenderComponent = (
    <Suspense fallback={<Loader />}>
      <SlideIn>
        <Component {...rest} />
      </SlideIn>
    </Suspense>
  );

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (layout === "AuthLayout") {
    return <AuthLayout>{RenderComponent}</AuthLayout>;
  } else if (layout === "AdminLayout") {
    return <AdminLayout>{RenderComponent}</AdminLayout>;
  }

  return RenderComponent;
};

const RenderRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.href}
            element={
              <RenderRoute
                component={route.component}
                layout={route.layout}
                requiresAuth={route.requiresAuth}
              />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/err-404" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => (
  <Router>
    <RenderRoutes />
  </Router>
);

export default AppRouter;
