const verifyRoles = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  };
};

module.exports = verifyRoles;