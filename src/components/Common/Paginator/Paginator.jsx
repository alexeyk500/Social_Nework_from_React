import React from 'react';
import classes from './Paginator.module.css';

let Paginator = (props) => {

  let pagesCount = Math.floor(props.totalUsersCount / props.pageSize);
  let maxPageCount = 20;
  pagesCount = pagesCount>maxPageCount ?maxPageCount :pagesCount;
  let pages = [];
  for(let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <span className={classes.userTitle}>Page Users - </span>
      {pages.map(page => (<span onClick={ ()=>{props.onChangeCurentPage(page)} }
                                className={props.currentPage === page
                                            ? classes.selectedPage
                                            : classes.numPage}>
                            {page}
                          </span>))
      }
    </div>
  )
}

export default Paginator;
