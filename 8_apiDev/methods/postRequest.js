const bodyParser = require("../util/bodyParser");
const writeTofFile = require("../util/writeFile");
const crypto = require("crypto");
module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      let body = await bodyParser(req);
      body.id = crypto.randomUUID();
      console.log("Request Body:", body);
      req.movies.push(body);
      writeTofFile(req.movies);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(req.movies));
      //   res.write(JSON.stringify(req.body))
      //   res.end();
    } catch (e) {
      console.log(e);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ title: "Posting data failed", message: "Request body is not valid" })
      );
    }
  }
};
