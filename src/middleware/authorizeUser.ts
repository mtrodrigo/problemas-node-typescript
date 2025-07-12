import { NextFunction, Request, Response } from "express";

export const authorizeUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.completed) {
    next();
  } else {
    res.status(403).json({message: "Não está completa, não pode ser apagada"}); 
  }
};