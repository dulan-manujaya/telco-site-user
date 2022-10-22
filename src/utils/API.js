// var api = "http://localhost:7000";
// var api = "http://127.0.0.1:7000";
var api = "http://178.128.117.245:7000";

export const CommonGet = (controller, queryString) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    // body: JSON.stringify(queryString),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonGetById = (controller, queryString) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
    },
    // body: JSON.stringify(queryString),
  };

  return fetch(api + "/" + controller + "/" + queryString, requestOptions);
};

export const CommonGetByParams = (controller, queryString) => {
  return fetch(api + "/" + controller + "?" + queryString);
};

export const CommonPost = (controller, requestbody) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};
export const CommonDeleteById = (controller, requestbody) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestbody),
  };
  return fetch(api + "/" + controller, requestOptions);
};
export const CommonUpdate = (controller, requestbody) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonDeleteAll = (controller, requestbody) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller, requestOptions);
};

export const CommonUpdateById = (controller, queryString, requestbody) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(requestbody),
  };

  return fetch(api + "/" + controller + "/" + queryString, requestOptions);
};
