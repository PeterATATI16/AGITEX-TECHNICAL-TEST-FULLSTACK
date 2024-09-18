const ENDPOINTS = {
  login: "/login",
  register: "/register",
  logout: "/logout",
  forgot_password: "/password/forgot",
  reset_password: "/password/reset",
  
  clients: {
    import: "/import-file",
    all: "/clients-list",
    show: "/show",
    update: "/update",
    delete: "/delete",
    deleteAll: "/delete-all-clients",
    stats: "/clients-stats",
  },
};

export default ENDPOINTS;
