import "./Pagination.css";

const Pagination = ({ pages = [], changePageTo, pageNumber , setQuatityPagination }) => {
  
  return (
    <>
    <div className="pagination">
      {pageNumber > 2 && <button onClick={()=> changePageTo(1)} className="btnBackNext">First</button>}
      { pages.length > 1 && <button onClick={()=> changePageTo(pageNumber -1) } className="btnBackNext">Back </button>}
      { pageNumber > 2 && <p>...</p>}
        {pages.map((i)=>(
          <>
            {  ( i === pageNumber-1 || i === pageNumber ||i === pageNumber+1 )  &&(
          <button key={i} onClick={()=>changePageTo(i)} className="btnPages" style={{backgroundColor:pageNumber=== i?  "#d42828": undefined, color:pageNumber=== i? "white": undefined}}>
            {i}
          </button>
           )}
           </>
        ))}
        { pageNumber < pages.length -1 && <p>...</p>}
      {pages.length > 1 && <button onClick={()=> changePageTo(pageNumber +1)} className="btnBackNext">Next</button>}
      {pageNumber < pages.length -1 && <button onClick={()=> changePageTo(pages.length)} className="btnBackNext">Last</button>}

   </div>
    </>
  );
};

export default Pagination;
