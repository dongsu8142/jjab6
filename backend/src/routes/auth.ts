import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/discord", passport.authenticate("discord"));

router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.redirect("http://localhost/dashboard");
  }
);

router.get("/", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
});

export default router;
