const writeToFile = require("../util/writeFile")


module.exports = (req, res) => {
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const uuid = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );
  if (!regexV4.test(uuid)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid uuid" }));
  } else if (baseUrl === "/api/movies/" && regexV4.test(uuid)) {
    const index = req.movies.findIndex((movie) => {
      return movie.id === uuid;
    });
    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Movie not found" }));
    } else {
        const movieName = req.movies[index].title;
        req.movies.splice(index, 1);
        writeToFile(req.movies);
        res.writeHead(201,{"Content-Type":"application/json"});
        res.end(JSON.stringify({message:`Remove the movie: ${movieName}`}))
    }
  }
};
