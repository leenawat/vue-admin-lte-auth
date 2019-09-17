import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = { ...route }
        // if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        // }
    })

    return res
}

export function filterAsyncRoutesSidebar(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutesSidebar(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}


const state = {
    routes: [],
    addRoutes: [],
    routes_sidebar:  []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    },
    SET_ROUTES_SIDEBAR: (state, routes) => {
        state.routes_sidebar = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            let accessedRoutes
            let accessedRoutesSidebar
            // if (roles.includes('admin')) {
            //     accessedRoutes = asyncRoutes || []
            // } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            accessedRoutesSidebar = filterAsyncRoutesSidebar(asyncRoutes, roles)
            // }
            commit('SET_ROUTES', accessedRoutes)
            commit('SET_ROUTES_SIDEBAR', accessedRoutesSidebar)
            resolve(accessedRoutes)

        });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
