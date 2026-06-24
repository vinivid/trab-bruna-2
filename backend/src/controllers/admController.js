import jwt from "jsonwebtoken"

export const checkAdm = (req, res) => {
  const { password } = req.body;
  if (password === "1234") {
    res.status(200).json({
      token: jwt.sign("string aleatoria para token", "segredo secreto")
    })
  } else {
    res.sendStatus(401);
  }
}