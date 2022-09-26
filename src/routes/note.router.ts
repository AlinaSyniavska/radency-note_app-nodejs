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

router.get('/:id',
    noteMiddleware.isIdValid,
    noteMiddleware.isNotePresent,
    noteController.getById);
router.patch('/:id',
    // commonMiddleware.isIdValid,
    // authMiddleware.checkAccessToken,
    // commonMiddleware.isDataValid(userValidator.updateUserValidator),
    // userMiddleware.isUserPresent,
    noteController.update);
router.delete('/:id',
    // commonMiddleware.isIdValid,
    // authMiddleware.checkAccessToken,
    // userMiddleware.isUserPresent,
    noteController.delete);

router.get('/stats',
    // commonMiddleware.isIdValid,
    // userMiddleware.isUserPresent,
    noteController.getStatistic);

export const noteRouter = router;