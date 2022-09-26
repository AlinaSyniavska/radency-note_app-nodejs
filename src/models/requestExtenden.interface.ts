import {Request} from 'express';

import {INote} from "./note.interface";

export interface IRequestExtended extends Request{
    note?: INote,
}