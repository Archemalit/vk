import React, {Component, useState} from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber - 1) * props.portionSize
  let rightPortionNumber = portionNumber * props.portionSize

  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }

    return (
      <div className={s.paginator}>
        {portionNumber > 1 && 
        <button onClick={() => {
          setPortionNumber(portionNumber - 1)
        }}>
          PREV
        </button>}
        {pages.filter(p => p > leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              className={cn({
                [s.selectedPage] : props.current === p
              }, s.pageNumber)}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
        {pagesCount > portionNumber && 
        <button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }}>
          NEXT
        </button> }
      </div>
    );
    }

export default Paginator;