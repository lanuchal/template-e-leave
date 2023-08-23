import React from "react";
import jsPDF from "jspdf";

function PdfGenerator() {
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    doc.addFont("../src/assets/fonts/Sarabun-Thin.ttf", "Sarabun", "normal");

    doc.setFont("Sarabun"); // set font
    doc.setFontSize(11);

    var arabicText =
      "สวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดีสวัสดี";
    var splitTitle = doc.splitTextToSize(arabicText, 180);
    doc.text(15, 20, splitTitle);

    // add page
    // doc.addPage("a4");
    // doc.text("Do you like that?", 20, 20);

    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");

    // Save the PDF
    //  doc.save('generated-pdf.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}

export default PdfGenerator;
