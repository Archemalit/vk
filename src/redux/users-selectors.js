import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector( getUsers, (users) => {
    return users.filter( (u) => true )
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCurrent = (state) => {
    return state.usersPage.current
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}