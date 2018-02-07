const passport = require("passport");
module.exports = app => {
  // app.get("/greeting", (req, res) => {
  //   res.send({ hi: "there" });
  // });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: [
        "user-read-email",
        "user-top-read",
        "user-read-playback-state",
        "user-modify-playback-state"
      ]
    })
  );

  app.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify"),
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );
};
