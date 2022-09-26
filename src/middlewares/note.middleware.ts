import {NextFunction, Request, Response} from "express";
import * as Joi from "joi";
import { Types } from "mongoose";

import {CustomError} from "../errors";
import {NoteModel} from "../dataBase";
import {IRequestExtended} from "../models";

export const noteMiddleware = {
    isIdValid: (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;

            if (!Types.ObjectId.isValid(id)) {
                return next(new CustomError('Not valid ID'));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isDataValid: (validationSchema: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {error, value} = validationSchema.validate(req.body);

            if(error) {
                return next(new CustomError(error.details[0].message));
            }
            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    },

    isNotePresent: async (req: IRequestExtended, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params;

            const note = await NoteModel.findOne({_id: id});

            if(!note){
                return next(new CustomError(`Note with id ${id} not found`, 404));
            }

            req.note = note;
            next();
        } catch (e) {
            next(e);
        }
    },
}

