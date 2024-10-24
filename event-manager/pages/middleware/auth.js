export default defineNuxtRouteMiddleware( () => {

    const autheticated = true

    if (!autheticated) {
        return navigateTo('/', {replace: true})
    }

})