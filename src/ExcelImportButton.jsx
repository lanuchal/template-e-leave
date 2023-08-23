import React from "react";
import * as XLSX from "xlsx";

function ExcelImportButton() {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "array" });
      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const importedData = XLSX.utils.sheet_to_json(worksheet);
        console.log(`Imported Data from ${sheetName}:`, importedData);
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
    </div>
  );
}

export default ExcelImportButton;
