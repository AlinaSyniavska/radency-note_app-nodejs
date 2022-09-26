import {Router} from 'express';

import {noteController} from "../controllers";
import {noteValidator} from "../validators";
import {noteMiddleware} from "../middlewares";

const router = Router();

router.get('/',
    noteController.getAll);
router.post('/',
    noteMiddleware.isDataValid(noteValidator.newNoteValidator),
    noteController.create);

router.get('/stats',
    noteController.getStatistics);

router.get('/:id',
    noteMiddleware.isIdValid,
    noteMiddleware.isNotePresent,
    noteController.getById);
router.patch('/:id',
    noteMiddleware.isIdValid,
    noteMiddleware.isDataValid(noteValidator.updateNoteValidator),
    noteMiddleware.isNotePresent,
    noteController.update);
router.delete('/:id',
    noteMiddleware.isIdValid,
    noteMiddleware.isNotePresent,
    noteController.delete);

export const noteRouter = router;