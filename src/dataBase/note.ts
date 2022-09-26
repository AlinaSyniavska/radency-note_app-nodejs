import {Model, model, Schema} from 'mongoose';

import {INote} from "../models";
import {noteCategoryEnum, noteStatusEnum} from "../constants";

export const NoteSchema: Schema = new Schema<INote>({
        name: {
            type: String,
            trim: true,
            required: true,
        },
        created: {
            type: String,
            trim: true,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: Object.values(noteCategoryEnum),
        },
        content: {
            type: String,
            trim: true,
            required: true,
        },
        dates: {
            type: [String],
        },
        noteStatus: {
            type: String,
            required: true,
            enum: Object.values(noteStatusEnum),
        },
    },
    {
        timestamps: true
    }
);

export const NoteModel: Model<INote> = model<INote>('note', NoteSchema);

