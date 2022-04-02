import * as theaterService from '../api/teatherAuth.js'

export const preload = async(ctx, next) => {
    const id = ctx.params.id;
    const data = await theaterService.getOne(id);
    ctx.theater = data;
    next();
}