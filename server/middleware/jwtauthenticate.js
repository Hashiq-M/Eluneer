const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const cookietoken = req.cookies.Token;
  if (cookietoken) {
    jwt.verify(cookietoken, "xXxpkebj", (err, data) => {
      if (err) {
        return res.json({ message: "Invalid token", status: "failed" });
      } else {
        req.user = data;
        next();
      }
    });
  }
};
module.exports = authenticate;
