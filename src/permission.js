import router from './router';
import { nextTick } from 'q';

function getToken() {
    return localStorage.getItem('token');
}

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
    console.log('before');
    const hasToken = getToken();
    console.log('token => ' + hasToken)
    if (hasToken) {
        next();
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
        }
    }
});

router.afterEach(() => {
    console.log('after');
});