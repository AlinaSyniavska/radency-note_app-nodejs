import * as Joi from "joi";

import {commonValidator} from "./common.validator";
import {noteCategoryEnum, noteStatusEnum} from "../constants";

export const noteValidator = {
    newNoteValidator: Joi.object({
        name: commonValidator.commonDataValidator.required(),
        content: commonValidator.commonDataValidator.required(),
        created: Joi.date().required(),
        category: Joi.string().valid(...Object.values(noteCategoryEnum)).required(),
        noteStatus: Joi.string().valid(...Object.values(noteStatusEnum)).required(),
        dates: Joi.array().items(Joi.string()),
    }),

    updateNoteValidator: Joi.object({
        name: commonValidator.commonDataValidator,
        content: commonValidator.commonDataValidator,
        created: Joi.date(),
        category: Joi.string().valid(...Object.values(noteCategoryEnum)),
        noteStatus: Joi.string().valid(...Object.values(noteStatusEnum)),
        dates: Joi.array().items(Joi.string()),
    }),
};
