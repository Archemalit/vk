import React, {Component} from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/anonymous.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { getFollowed, getUnfollowed } from '../../api/api'
import { deleteUser, postUser } from '../../redux/users-reducer'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={props.current === p && s.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.deleteUser(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.postUser(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
    }

export default Users;