import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();

const PORT = 5555;
/*
function handleListening() {
  console.log(`Listening on:http://localhost:${PORT}`);
}
*/
const handleListening = () =>
  console.log(`Listening on:http://localhost:${PORT}`);
/*
function handleHome(req, res) {
  res.send("Hello from home");
}
*/
const handleHome = (req, res) => res.send("Hello from my ass");
const handleProfile = (req, res) => res.send("You are on my profile");

/*middle test
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
const middleware = (req, res, next) => {
  res.send("not happening");
};
app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
