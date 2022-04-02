import * as libraryService from '../api/libraryService.js';

export const preloadMiddleware = async (ctx, next) => {
    const id = ctx.params.id;
    const book = await libraryService.getBook(id);
    if(ctx.user) {
        ctx.isOwner = ctx.user._id == book._ownerId;
        ctx.hasLiked = await libraryService.hasLiked(book._id, ctx.user._id);
    }
    ctx.totalLikes = await libraryService.getLikesCount(book._id);
    ctx.book = book;
    next();
};