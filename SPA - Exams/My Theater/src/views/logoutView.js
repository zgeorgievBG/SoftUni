import * as authService from '../api/userAuth.js'

export const logoutView = async (ctx) => {
    await authService.logout();
    ctx.page.redirect('/')
}