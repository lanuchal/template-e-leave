import React from "react";
import RemoteDataGrid from "./RemoteDataGrid";
import DrawingBoard from "./DrawingBoard";
import ExcelExportButton from "./ExcelExportButton";
import ExcelImportButton from "./ExcelImportButton";
import PdfGenerator from "./PdfGenerator";
import ImgCrop1 from "./ImgCrop1";
import Pdf from "./Pdf";
import Pdf2 from "./Pdf2";
import PdfRate from "./PdfRate";
import PdfSick from "./PdfSick";

function App() {



  return (
    <div>
      {/* <RemoteDataGrid /> */}
      {/* <PdfGenerator /> */}
      {/* <Pdf /> */}
      {/* <Pdf2 />         ////// */}
      {/* <PdfRate /> */}
      <PdfSick />
      {/* <ImgCrop1 /> */}
      {/* <ExcelExportButton /> */}
      {/* <ExcelImportButton /> */}
      {/* <DrawingBoard /> */}
    </div>
  );
}

export default App;
