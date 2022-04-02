import { getUserToken, getUserId} from '../utils.js';

export const authMiddleware = (ctx, next) => {
    const token = getUserToken();
    const userId = getUserId();
    ctx.accessToken = token;
    ctx.userId = userId;
    next();
};