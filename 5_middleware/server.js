const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");

//built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//application-level middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
  next();
};
app.use(loggerMiddleware);

//router-level-middleware
app.use("/api/users", router);
const mimicAuth = (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log(`Auth status: ${authStatus}`);
    next();
  } else {
    res.status(401);
    throw new Error("User is not authorised");
  }
};
const getUsers = (req, res) => {
  res.json({ message: "Get all users" });
};
const createUsers = (req, res) => {
  console.log("Request body from client", req.body);
  res.json({ message: `Create user with id ${new Date().getTime()}` });
};
router.use(mimicAuth);
router.route("/").get(getUsers).post(createUsers);

//Error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorised",
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 401:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;
    default:
      break;
  }
};

app.all("*", (req, res) => {
  res.status(404);
  throw new Error("Route not found");
});
app.use(errorHandler);
app.listen(3000, () => {
  console.log(`Server starting on port:3000`);
});

// app.use(logger);
// app.get("/",(req,res)=> {
//     res.send("Home Page");
// })
// app.get("/users",auth,(req,res)=> {
//     console.log(req.admin)
//     res.send("Users Page");
// })
// function logger(req,res,next) {
//     console.log('Logger')
//     next();
// }
// function auth(req,res,next) {
//     if(req.query.admin === "true") {
//         req.admin = true;
//         next();
//     } else {
//         res.send("No privilege to perform actions");
//     }
// }
