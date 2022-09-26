import * as Joi from "joi";

export const commonValidator = {
    commonDataValidator: Joi.string().max(300).trim(true),
};
