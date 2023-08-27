export default {
  responseFulfilled: (response) => {
    return response;
  },
  responseRejected: (error) => {
    if ([302, 401, 403].includes(error.response.status)) {
      const win = window;
      win.location = "/login";
    } else {
      return error;
    }
  },
  requestFulfilled: (request) => {
    request.headers["X-Requested-With"] = "XMLHttpRequest";
    return request;
  },
  requestRejected: (error) => {
    return error;
  },
};
