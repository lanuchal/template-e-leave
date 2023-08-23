import React from "react";
import RemoteDataGrid from "./RemoteDataGrid";
import DrawingBoard from "./DrawingBoard";
import ExcelExportButton from "./ExcelExportButton";
import ExcelImportButton from "./ExcelImportButton";
import PdfGenerator from "./PdfGenerator";

function App() {



  return (
    <div>
      {/* <RemoteDataGrid /> */}
      <PdfGenerator />
      {/* <ExcelExportButton /> */}
      {/* <ExcelImportButton /> */}
      {/* <DrawingBoard /> */}
    </div>
  );
}

export default App;
