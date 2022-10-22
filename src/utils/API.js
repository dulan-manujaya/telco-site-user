export const CommonGet = (controller, queryString) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return fetch("api/" + controller, requestOptions);
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

  return fetch("api/" + controller, requestOptions);
};

export const CommonUpdate = (controller, requestbody) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestbody),
  };

  return fetch("api/" + controller, requestOptions);
};
