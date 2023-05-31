import "./Pagination.css";

const Pagination = ({ pages, changePageTo, pageNumber , setQuatityPagination }) => {
  return (
    <>
    <div className="pagination">
      { pages.length > 1 && <button onClick={()=> changePageTo(pageNumber -1) } className="btnBackNext">Back </button>}
        {pages.map((i)=>(
          <button key={i} onClick={()=>changePageTo(i)} className="btnPages" style={{backgroundColor:pageNumber=== i?  "#d42828": undefined, color:pageNumber=== i? "white": undefined}}>
            {i}
          </button>
          
        ))}
      {pages.length > 1 && <button onClick={()=> changePageTo(pageNumber +1)} className="btnBackNext">Next</button>}
  </div>
    </>
  );
};

export default Pagination;
