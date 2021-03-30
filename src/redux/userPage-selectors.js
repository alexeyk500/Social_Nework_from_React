import { createSelector } from "reselect";

// примитивный селектор
const getPageUsers = (state) => {
  return state.usersPage.users
};

// Демо сложного селектора из библиотеки reselect
export const getPageUsersSuper = createSelector(getPageUsers, (pageUser) => {
  // что-то делаем с pageUser
  return pageUser;
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
};

export const getIsFollowingInProgress = (state) => {
  return state.usersPage.isFollowingInProgress
};
