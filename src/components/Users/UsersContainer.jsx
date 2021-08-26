import React, {Component} from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, postUser, deleteUser, setUsers, getNewUsers, toggleFollowingProgress, setCurrent, getUsersTC, setTotalUsersCount } from '../../redux/users-reducer';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { getCurrent, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount(){
      this.props.getUsersTC(this.props.current, this.props.pageSize)
    }
  
    onPageChanged = (current) => {
      this.props.getNewUsers(current, this.props.pageSize)
    }
  
    render() {
      return (
        <>
        {this.props.isFetching ? <Preloader /> : null}
          <Users
            totalUsersCount={this.props.totalUsersCount}
            current={this.props.current}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            deleteUser={this.props.deleteUser}
            postUser={this.props.postUser}
          />
        </>
      );
    }
  }

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        current: getCurrent(state),
        isFetching: getIsFetching(state),
        followingInProgress : getFollowingInProgress(state),
    }
}



export default compose(
  connect(mapStateToProps, {
    setUsers,
    setCurrent,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsersTC,
    getNewUsers,
    unfollow,
    follow,
    deleteUser,
    postUser,
  })
)(UsersContainer);