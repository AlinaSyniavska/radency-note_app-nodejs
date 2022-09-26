import {NoteModel} from "../dataBase";
import {INote} from "../models";


export const noteService = {
    findAll: (params = {}) => {
        return NoteModel.find(params);
    },

    findOne: (params = {}) => {
        return NoteModel.findOne(params);
    },

    createOne: (note: INote) => {
        return NoteModel.create(note);
    },

    updateOne: (params = {}, noteData: Partial<INote>, options = {new: true}) => {
        return NoteModel.findOneAndUpdate(params, noteData, options);
    },

    deleteOne: (params = {}) => {
        return NoteModel.deleteOne(params);
    },
};
