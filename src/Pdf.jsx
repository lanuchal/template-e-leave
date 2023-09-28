import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

function Pdf() {
  const genPdf = () => {
    const head = "แบบบันทึกใบลาพักพ่อน";
    const writeAddress = "โรงเรียน";
    const writeDate = "1 มีนาคม 2566";
    const title = "ขอลาพักพ่อน";
    const infrom = "นายกองค์การบริส่วนจังหวัดสมุทรสาคร";
    const userLeaveName = "นางสาวกวิตา ทองสอน";
    const userLeavePosition = "นักวิชาการศึกษาปฏิบัติการ";
    const userLeaveDivision = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";
    const userLeaveAffiliation = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";
    const userLeaveActionOld = 5;
    const userLeaveActionNow = 15;
    const userLeaveActionSum = userLeaveActionOld + userLeaveActionOld;
    const userLeaveActiondateStart = "6 มีนาคม 2566";
    const userLeaveActiondateEnd = "10 มีนาคม 2566";
    const userLeaveActiondateSum = 4;
    const userLeaveOut = "1";
    const userLeaveContact = `169 ถนนลงหาดบางแสง ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20131 ${
      userLeaveOut == "1" && "(ขออนุญาติออกนอกเขตจังหวัดสมุทรสาคร)"
    }`;

    const userLeaveOld = "4";
    const userLeaveNow = "5";
    const userLeaveSum = (
      parseInt(userLeaveOld) + parseInt(userLeaveNow)
    ).toString();

    const userLeaveTel = "0886584660";
    const insteadName = "นางสาวฉวีวรรณ ไตรรัตนานนท์";
    const insteadPosition = "ผู้อำนวนการกองเจ้าหน้าที่ ";

    const directorGroupName = "นางสาวกวิตา ทองสอน";
    const directorGroupPosition = "นักวิชาการศึกษาปฏิบัติการ";

    const detail = `ข้าพเจ้า ${userLeaveName}   ตำแหน่ง${userLeavePosition}  ฝ่าย${userLeaveDivision}  สังกัด${userLeaveAffiliation}  มีวันลาพักผ่อนสะสม  ${userLeaveActionOld}  วันทำการ มีสิทธิลาพักพ่อนประจำปีนี้  ${userLeaveActionNow}  วันทำการ รวมเป็น ${userLeaveActionSum} วันทำการ ขอลาพักพ่อน ตั้งแต่วันที่ ${userLeaveActiondateStart} ถึงวันที่ ${userLeaveActiondateEnd} มีกำหนด ${userLeaveActiondateSum} วัน ${userLeaveContact} หมายเลขโทรศัพท์ ${userLeaveTel}`;

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    doc.addFont(
      "../src/assets/fonts/THSarabun Bold.ttf",
      "Sarabun-Bold",
      "normal"
    );
    doc.setFont("Sarabun-Bold"); // set font
    doc.setFontSize(18);
    doc.text(head, 105, 15, null, null, "center");
    doc.addFont("../src/assets/fonts/THSarabunNew.ttf", "Sarabun", "normal");
    doc.setFont("Sarabun"); // set font
    doc.setFontSize(16);
    doc.text("เขียนที่", 125, 25);
    doc.text(writeAddress, 140, 25);
    doc.text("วันที่", 125, 31);
    doc.text(writeDate, 140, 31);
    doc.text("เรื่อง", 15, 40);
    doc.text(title, 25, 40);
    doc.text("เรียน", 15, 46);
    doc.text(infrom, 25, 46);

    var arabicText = "                " + detail;
    var splitTitle = doc.splitTextToSize(arabicText, 180);
    doc.setLineHeightFactor(1.2);
    doc.text(15, 55, splitTitle);

    doc.text(
      "ขออนุญาตมอบหมายงานในหน้าที่ให้ " + insteadName,
      67,
      95,
      null,
      null,
      "center"
    );
    doc.text(
      "ตำแหน่ง " + insteadPosition + " ปฏิบัติหน้าที่แทน",
      67,
      101,
      null,
      null,
      "center"
    );
    doc.text(
      "(ลงชื่อ)                          ผู้รับมอบ",
      67,
      118,
      null,
      null,
      "center"
    );

    doc.text(
      "ลงชื่อ                                        ",
      165,
      95,
      null,
      null,
      "center"
    );
    doc.text("( " + directorGroupName + " )", 165, 105, null, null, "center");
    doc.text(directorGroupPosition, 165, 111, null, null, "center");
    doc.text("สถิติการลาในปีงบประมาณ", 67, 129, null, null, "center");

    doc.rect(37, 131, 20, 15);
    doc.text("ลามาแล้ว\n(วันทำการ)", 47, 137, null, null, "center");
    doc.rect(57, 131, 20, 15);
    doc.text("ลาครั้งนี้\n(วันทำการ)", 67, 137, null, null, "center");
    doc.rect(77, 131, 20, 15);
    doc.text("รวมเป็น\n(วันทำการ)", 87, 137, null, null, "center");

    doc.rect(37, 146, 20, 10);
    doc.text(userLeaveOld, 47, 152, null, null, "center");
    doc.rect(57, 146, 20, 10);
    doc.text(userLeaveNow, 67, 152, null, null, "center");
    doc.rect(77, 146, 20, 10);
    doc.text(userLeaveSum, 87, 152, null, null, "center");

    // doc.rect(67, 131, 40, 20);

    // doc.rect(40, 131, 40, 20);
    // doc.rect(50, 131, 40, 20);

    // Log the base64 data to the console

    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result.split(",")[1];
      //   console.log(base64data);
    };
    reader.readAsDataURL(pdfBlob);

    //   window.open(pdfUrl);
    return pdfUrl;
  };

  //   window.open(doc.output('bloburl'), '');

  const pppp = genPdf();

  return (
    <iframe
      src={pppp}
      frameborder="0"
      style={{ width: "100%", height: "100vh" }}
    ></iframe>
  );
}

export default Pdf;
