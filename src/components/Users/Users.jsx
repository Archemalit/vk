import React, {Component} from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User/User'

let Users = (props) => {
    return (
      <>
        <Paginator
          onPageChanged={props.onPageChanged}
          current={props.current}
          totalItemsCount={props.totalItemsCount}
          pageSize={props.pageSize}
          portionSize={10}
        />
        {props.users.map((u) => 
          <User user={u} followingInProgress={props.followingInProgress} />
        )}
      </>
    );
    }

export default Users;