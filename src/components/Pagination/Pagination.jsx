/* eslint-disable react/prop-types */

import "./Pagination.css";

function Pagination({ setStatePage, totalPages, statePage }) {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setStatePage(page);
    }
  };
  //   console.log(totalPages)
  //    totalPages = totalPages % 100 ; // 45721 % 100
  //    console.log(totalPages, statePage);
  // console.log(totalPages);
  return (
    <div className="btn-pagination">
      <button
        onClick={() => handlePageChange(statePage - 1)}
        disabled={statePage === 1}
        style={{ backgroundColor: `${statePage === 1 ? "#EEE" : "orange"}` ,  cursor: `${statePage === 1 ? "no-drop" : "pointer"}` }}
      >
        Previous
      </button>

      <button onClick={() => handlePageChange(1)}>1</button>
      <button onClick={() => handlePageChange(2)}>2</button>
      <button onClick={() => handlePageChange(3)}>3</button>
      <button onClick={() => handlePageChange(4)}>4</button>
      <button onClick={() => handlePageChange(5)}>5</button>
      {/* <button onClick={() => handlePageChange(statePage + 1)}>{}</button>
      <button onClick={() => handlePageChange(statePage + 1)}>{statePage+1}</button>
      <button onClick={() => handlePageChange(statePage + 1)}>{statePage+2}</button> */}

      <button
        onClick={() => handlePageChange(statePage + 1)}
        disabled={statePage === totalPages}
        style={{ backgroundColor: `${statePage === totalPages ? "#EEE" : "orange"}` , cursor: `${statePage === totalPages ? "no-drop" : "pointer"}` }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

{
  /* {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={statePage === index + 1}
          >
            {index + 1}
          </button>
        ))} */
}
