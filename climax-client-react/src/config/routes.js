import { lazy } from "react";

const routes = [
  {
    id: 1,
    href: "/",
    component: lazy(() => import("../components/pages/auth/auth-forms/Login")),
    layout: "AuthLayout",
  },
  {
    id: 2,
    href: "/register",
    component: lazy(() =>
      import("../components/pages/auth/auth-forms/Register")
    ),
    layout: "AuthLayout",
  },
  {
    id: 3,
    href: "/forgot-password",
    component: lazy(() =>
      import("../components/pages/auth/auth-forms/ForgotPassword")
    ),
    layout: "AuthLayout",
  },
  {
    id: 31,
    href: "/reset-password",
    component: lazy(() =>
      import("../components/pages/auth/auth-forms/ResetPassword")
    ),
    layout: "AuthLayout",
  },
  {
    id: 4,
    href: "/dashboard",
    component: lazy(() => import("../components/pages/dashboard/Dashboard")),
    requiresAuth: true,
    layout: "AdminLayout",
  },
  {
    id: 5,
    href: "/clients",
    component: lazy(() => import("../components/pages/users/Users")),
    requiresAuth: true,
    layout: "AdminLayout",
  },

  {
    id: 404,
    href: "/err-404",
    component: lazy(() => import("../components/pages/redirections/ERR404")),
  },
];

export default routes;
