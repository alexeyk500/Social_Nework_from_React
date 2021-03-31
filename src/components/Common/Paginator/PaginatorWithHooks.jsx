import React, {useState, useEffect} from 'react';
import classes from './Paginator.module.css';

let PaginatorWithHooks = (props) => {

  let pagesCount = Math.floor(props.totalUsersCount / props.pageSize);

  let curentPortionNumber = Math.ceil(props.currentPage / props.pageSize);
  // if (curentPortionNumber===0) {
  //   curentPortionNumber=1
  // }

  const portonSize = 10;
  const [curentPortion, setPortionNumber] = useState(curentPortionNumber);
  let minViseblePage = (curentPortion-1) * portonSize + 1;
  let maxViseblePage = curentPortion * portonSize;

  let pages = [];
  for(let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

  let newPage = pages.filter(p => p>=minViseblePage && p<=maxViseblePage)

  return (
    <div>
      { curentPortion > 1 && <button className={classes.userButton}
              onClick={()=>{setPortionNumber(curentPortion-1)}}
        >{`${(curentPortion-2) * portonSize} <<`}</button>
      }
      {newPage.map(page => (<span onClick={ ()=>{props.onChangeCurentPage(page)} }
                                className={props.currentPage === page
                                            ? classes.selectedPage
                                            : classes.numPage}>
                            {page}
                          </span>))
      }
      { curentPortion < pagesCount && <button className={classes.userButton}
              onClick={()=>{setPortionNumber(curentPortion+1)}}
      >{`>> ${(curentPortion+1) * portonSize}`}</button>}
    </div>
  )
}

export default PaginatorWithHooks;
