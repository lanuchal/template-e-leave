import React from "react";
import * as XLSX from "xlsx";

function ExcelExportButton() {
  const data = [
    { name: "John", age: 28, country: "สวัสดี" },
    { name: "Alice", age: 32, country: "Canada" },
  ];
  const data2 = [
    { name: "สวัสดี", age: 28, country: "สวัสดี" },
    { name: "สวัสดี", age: 32, country: "สวัสดี" },
  ];
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1", true);

    const ws2 = XLSX.utils.json_to_sheet(data2);
    XLSX.utils.book_append_sheet(wb, ws2, "Sheet2", true);

    const excelFileName = "data.xlsx";
    XLSX.writeFile(wb, excelFileName);
  };

  return (
    <div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
}

export default ExcelExportButton;
