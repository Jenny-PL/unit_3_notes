const axios = require("axios");

axios
  .get("https://us1.locationiq.com/v1/search.php", {
    params: {
      key: process.env["api_key"], // discussed below
      q: "Seattle, Washington, USA",
      format: "json",
    },
  })
  .then((response) => {
    console.log("success!", response.data);
  })
  .catch((error) => {
    console.log("error!", error.response.data);
  });
