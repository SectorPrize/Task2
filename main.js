function getData() {
  let status = function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  };
  let json = function (response) {
    return response.json();
  };

  fetch("https://api.coincap.io/v2/assets")
    .then(status)
    .then(json)
    .then(function (data) {
      console.log("data", data);
    })
    .catch(function (error) {
      console.log("error", error);
    });
}
