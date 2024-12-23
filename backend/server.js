import express from "express";

const app = express();
const PORT = 5000;

// The 'get' method defines a route for HTTP GET requests.
// It takes two parameters:
// 1. The route path ("/" in this case).
// 2. A callback function that handles the request (req) and response (res) objects.
app.get("/", function (req, res) {
  res.send("Hello, this is testing mode");
});

// Start the server and listen on the specified port.
// The callback function runs when the server starts successfully.
app.listen(PORT, function () {
  console.log(`The server is listening at port ${PORT}`);
});