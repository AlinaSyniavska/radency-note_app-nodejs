import {NextFunction, Response, Request} from "express";
import {noteService} from "../services";
import {IRequestExtended} from "../models";

export const noteController = {
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const notes = await noteService.findAll().exec();

            res.json({
                data: notes,
            });
        } catch (e) {
            next(e);
        }
    },

    create: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newNote = await noteService.createOne({...req.body});

            res.status(201).json(newNote);
        } catch (e) {
            next(e);
        }
    },

    getById: async (req: IRequestExtended, res: Response, next: NextFunction) => {
        try {
            const note = req.note;
            res.json(note);
        } catch (e) {
            next(e);
        }
    },

    update: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;
            const updatedNote = await noteService.updateOne({_id: id}, req.body);
            res.status(201).json(updatedNote);
        } catch (e) {
            next(e);
        }
    },

    delete: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;
            await noteService.deleteOne({_id: id});
            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },

    getStatistic: async (req: Request, res: Response, next: NextFunction) => {
        try {
            // const {id} = req.params;
            // await userService.deleteOne({_id: id});
            // res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
};
