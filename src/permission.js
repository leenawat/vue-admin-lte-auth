import router from './router';
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, setToken, removeToken } from '@/utils/auth'


NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            // determine whether the user has obtained his permission roles through getInfo
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                // prevent who know url and go to url direct without permission
                // and show 403 page
                if (to.meta.roles) {
                    console.log("guard")
                    var permissionRoles = to.meta.roles;
                    console.log(to);
                    const roles = store.getters && store.getters.roles
                    console.log(roles);
                    const hasPermission = roles.some(role => {
                        return permissionRoles.includes(role)
                    })
                    console.log(hasPermission);
                    if (hasPermission) {
                        next()
                    } else {
                        next({ path: "/403" })
                    }
                }else{
                    next()
                }
            } else {
                try {
                    const { roles } = await store.dispatch('user/getInfo');
                    // generate accessible routes map based on roles
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

                    // dynamically add accessible routes
                    router.addRoutes(accessRoutes)
                    next({ ...to, replace: true })
                } catch (error) {
                    console.log(error);
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken')
                    // Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        /* has no token */
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
});

router.afterEach(() => {
    NProgress.done()
});