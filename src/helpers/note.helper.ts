import {IStats} from "../models";
import {noteCategoryEnum} from "../constants";

export const noteHelper = {
    formStatistics: (actStatus: IStats[], archStatus: IStats[]) => {
        return [
            {
                category: noteCategoryEnum.IDEA,
                active: actStatus.find(item => item._id === noteCategoryEnum.IDEA)?.total || 0,
                archived: archStatus.find(item => item._id === noteCategoryEnum.IDEA)?.total || 0,
            },
            {
                category: noteCategoryEnum.TASK,
                active: actStatus.find(item => item._id === noteCategoryEnum.TASK)?.total || 0,
                archived: archStatus.find(item => item._id === noteCategoryEnum.TASK)?.total || 0,
            },
            {
                category: noteCategoryEnum.RANDOM_THOUGHT,
                active: actStatus.find(item => item._id === noteCategoryEnum.RANDOM_THOUGHT)?.total || 0,
                archived: archStatus.find(item => item._id === noteCategoryEnum.RANDOM_THOUGHT)?.total || 0,
            },
        ];
    },
}

