import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  jwt.verify(token, "segredo secreto", (err, decoded) => {
    if (err)
      return res.sendStatus(401);

    next();
  });    
};