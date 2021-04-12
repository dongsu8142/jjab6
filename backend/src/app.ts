import { config } from "dotenv";
config();
import "./strategies/discord";
import passport from "passport";
import express from "express";
import routes from "./routes";
import session from "express-session";
import cors from "cors";
const Store = require("express-mysql-session")(session);
const app = express();
const PORT = process.env.PORT || 3002;

const options = {
  host: process.env.MYSQL_DB_HOST,
  port: Number(process.env.MYSQL_DB_PORT),
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASS,
  database: process.env.MYSQL_DB_NAME,
  schema: {
    columnNames: {
      data: "content",
    },
  },
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    store: new Store(options),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
