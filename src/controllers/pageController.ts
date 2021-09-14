import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('pafes/page');
    // res.render('pafes/page);
}

export const dogs = (req: Request, res: Response) => {
    // res.render('pafes/page);
}

export const cats = (req: Request, res: Response) => {
    // res.render('pafes/page);
}

export const fishes = (req: Request, res: Response) => {
    // res.render('pafes/page);
}