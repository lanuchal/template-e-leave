import axios from "axios";
import React, { useEffect, useState } from "react";

function RemoteDataGrid() {
  const [departmentData, setDepartmentData] = useState([]);
  const [currentSearchTag, setCurrentSearchTag] = useState(""); // เพิ่ม state สำหรับคำค้นหา
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getData();
  }, []); // เพิ่ม currentSearchTag เป็น dependency

  const getData = () => {
    let data = "";

    let config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDIiLCJpYXQiOjE2OTI3NTU0MTYsImV4cCI6MTY5Mjg0MTgxNn0.rLQ2qADUAG_CqFDPf4oKwYpdctxgn_ht9froDqvgmd8",
      },
      data: data,
    };

    axios
      .get("https://apie-leave.devcm.info/api-v1/org", config)
      .then((response) => {
        setDepartmentData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredData = currentSearchTag
    ? departmentData.filter((department) =>
        Object.values(department).some((value) =>
          String(value).toLowerCase().includes(currentSearchTag.toLowerCase())
        )
      )
    : departmentData;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (searchValue) => {
    setCurrentSearchTag(searchValue);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 3; // จำนวนหน้าที่จะแสดงเป็นตัวเลขจริงๆ

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(visiblePages / 2)) {
        for (let i = 1; i <= visiblePages; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...", totalPages);
      } else if (currentPage >= totalPages - Math.floor(visiblePages / 2)) {
        pageNumbers.push(1, "...");
        for (let i = totalPages - visiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, "...");
        for (
          let i = currentPage - Math.floor(visiblePages / 2);
          i <= currentPage + Math.floor(visiblePages / 2);
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...", totalPages);
      }
    }

    return pageNumbers;
  };

  const handleItemsPerPageChange = (data) => {
    setItemsPerPage(data);
  };

  return (
    <div className="container-lg p-5">
      <input
        className="form-control mb-5"
        type="text"
        placeholder="Search by tag..."
        value={currentSearchTag}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="d-flex justify-content-between">
        <div>
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            onChange={(e) => handleItemsPerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <ul className="pagination pagination-sm">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
          </li>
          {getPageNumbers().map((pageNumber, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === pageNumber
                  ? "active"
                  : pageNumber === "..."
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageNumber === "..." || currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </div>
      <div className="table-responsive-sm">
        <table className="table">
          <thead>
            <tr>
              <th>department_id</th>
              <th>department_name</th>
              <th>create_by</th>
              <th>create_time</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((department, key) => (
              <tr key={key}>
                <td>{department.department_id}</td>
                <td>{department.department_name}</td>
                <td>{department.create_by}</td>
                <td>{department.create_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RemoteDataGrid;
