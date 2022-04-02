import {getUserData} from '../utils.js';

export const authMiddleware = (ctx, next) => {
    ctx.user = getUserData();
    next();
};