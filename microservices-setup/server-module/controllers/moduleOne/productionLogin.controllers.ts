import { Request, Response } from "express";

const ProductionLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  res.json({ username: username + password, password: password });
};

export { ProductionLogin };
