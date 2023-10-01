import React from "react";
import { jsPDF } from "jspdf";
import checkImg from "./assets/imgs/check.png";

function PdfRate() {
  const genPdf = () => {
    const head =
      "แบบแจ้งการลงเวลาปฏิบัติราชการสำหรับผู้ที่ปฏิบัติงานนอกสำนักงาน";
    const writeDate = "1 มีนาคม 2566";
    const title = "การลงเวลาปฏิบัติราชการ";
    const infrom = "ผู้อำนวยการโรงเรียนวัดหลักสี่ราษฎร์สโมสร";
    const userLeaveName = "นางสาวกวิตา ทองสอน";
    const userLeavePosition = "นักวิชาการศึกษาปฏิบัติการ";
    const userLeaveDivision = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";
    const userLeaveAffiliation = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";
    const userLeaveActiondate = "6 มีนาคม 2566";
    const leaveRemark =
      "ได้สแกนลายนิ้วมือแล้วเมื่อเวลาประมาณ 07.45 น. แต่เครื่องไม่ทำการบันทึก";

    const userLeaveOld = "4";
    const userLeaveNow = "5";
    const userLeaveSum = (
      parseInt(userLeaveOld) + parseInt(userLeaveNow)
    ).toString();

    const detail = `                ข้าพเจ้า ${userLeaveName}   ตำแหน่ง${userLeavePosition}  ฝ่าย${userLeaveDivision}  สังกัด${userLeaveAffiliation}`;

    const checkName = "นางสาววินุรักษ์ สุขสำราญ";
    const checkAcc = "1";
    const checkY = checkAcc == "1" ? 1 : -6;
    const checkComment = checkAcc == "1" ? "" : "ไม่อนุญาติให้ลา";
    const checkAct = "0";
    const checkPosition = `${checkAct != "0" ? "รักษาการแทน " : ""}ผู้ตรวจสอบ`;
    const checkDate = `6 มีนาคม 2566`;

    const headName = "นางสาววินุรักษ์ สุขสำราญ";
    const headAcc = "0";
    const headY = headAcc == "1" ? 1 : -6;
    const headComment = headAcc == "1" ? "" : "ไม่อนุญาติให้ลา";
    const headAct = "1";
    const headPosition = `${headAct != "0" ? "รักษาการแทน " : ""}ผู้ตรวจสอบ`;
    const headDate = `6 มีนาคม 2566`;

    const presidentName = "นางสาววินุรักษ์ สุขสำราญ";
    const presidentAcc = "0";
    const presidentY = presidentAcc == "1" ? 1 : -6;
    const presidentComment = presidentAcc == "1" ? "" : "ไม่อนุญาติให้ลา";
    const presidentAct = "1";
    const presidentPosition = `${presidentAct != "0" ? "รักษาการแทน " : ""}ผู้ตรวจสอบ`;
    const presidentDate = `6 มีนาคม 2566`;




    var typeLeave = 1;
    var yTypeLeave = 0;
    if (typeLeave == 1) {
      yTypeLeave = 58;
    } else if (typeLeave == 2) {
      yTypeLeave = 78;
    } else if (typeLeave == 3) {
      yTypeLeave = 101;
    } else if (typeLeave == 4) {
      yTypeLeave = 133;
    } else if (typeLeave == 5) {
      yTypeLeave = 158;
    }

    const yType = 66;

    const yUserLeave = 120;
    const xUserLeave = 130;

    const yCheck = 200;
    const yHead = 200;
    const yPresident = 200;
    const yDeputySecretary = 203;

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
    doc.addFont("../src/assets/fonts/THSarabunNew.ttf", "Sarabun", "normal");
    doc.setFont("Sarabun-Bold"); // set font
    doc.setFontSize(18);
    doc.text(head, 105, 20, null, null, "center");
    doc.setFont("Sarabun"); // set font
    doc.setFontSize(16);
    doc.text("วันที่", 125, 31);
    doc.text(writeDate, 140, 31);
    doc.text("เรื่อง", 15, 40);
    doc.text(title, 25, 40);
    doc.text("เรียน", 15, 46);
    doc.text(infrom, 25, 46);


    var splitTitle = doc.splitTextToSize(detail, 180);
    doc.setLineHeightFactor(1.2);
    doc.text(15, 55, splitTitle);

    doc.text("ไม่ได้ลงเวลาปฏิบัติราชการ", 15, 70);

    doc.rect(57, yType, 5, 5);
    doc.rect(77, yType, 5, 5);
    doc.rect(100, yType, 5, 5);
    doc.rect(132, yType, 5, 5);
    doc.rect(157, yType, 5, 5);
    doc.text("เช้า", 64, yType + 4);
    doc.text("กลับ", 84, yType + 4);
    doc.text("เข้าและกลับ", 107, yType + 4);
    doc.text("เข้าสาย", 139, yType + 4);
    doc.text("กลับก่อน", 164, yType + 4);

    doc.text(
      `ในวันที่ ${userLeaveActiondate} เนื่องจาก ${leaveRemark}`,
      15,
      77
    );

    doc.addImage(checkImg, "PNG", yTypeLeave, yType - 1, 5, 5);

    doc.text(
      "ขอแสดงความนับถือ",
      xUserLeave,
      yUserLeave - 20,
      null,
      null,
      "center"
    );
    doc.text(
      "( " + userLeaveName + " )",
      xUserLeave,
      yUserLeave + 6,
      null,
      null,
      "center"
    );
    doc.text(
      userLeavePosition,
      xUserLeave,
      yUserLeave + 12,
      null,
      null,
      "center"
    );

    doc.rect(20, 146, 85, 8);
    doc.rect(105, 146, 85, 8);
    doc.rect(20, 154, 85, 70);
    doc.rect(105, 154, 85, 70);
    doc.text("เจ้าหน้าที่ควบคุมการลา", 43, 152);
    doc.text("ผู้บังคับบัญชาเบื้องต้น", 132, 152);

    const ybox = 157;
    doc.rect(25, ybox, 5, 5);
    doc.rect(110, ybox, 5, 5);
    doc.rect(25, ybox + 7, 5, 5);
    doc.rect(110, ybox + 7, 5, 5);

    doc.addImage(checkImg, "PNG", 26, ybox - checkY, 5, 5);
    doc.addImage(checkImg, "PNG", 111, ybox - headY, 5, 5);

    doc.text("ทราบและลงบันทึก", 32, 161);
    doc.text(`อื่นๆ ${checkComment}`, 32, 168);

    doc.text("ทราบและขอรับรองว่าข้อมูลเป็นความจริง", 117, 161);
    doc.text(`อื่นๆ ${headComment}`, 117, 168);



    doc.text("ลงชื่อ", 27, yCheck);
    doc.text("( " + checkName + " )", 60, yCheck + 6, null, null, "center");
    doc.text(checkPosition, 60, yCheck + 12, null, null, "center");
    doc.text(checkDate, 60, yCheck + 18, null, null, "center");

    doc.text("ลงชื่อ", 115, yHead);
    doc.text("( " + headName + " )", 147, yHead + 6, null, null, "center");
    doc.text(headPosition, 147, yHead + 12, null, null, "center");
    doc.text(headDate, 147, yHead + 18, null, null, "center");




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
    <iframe src={pppp} style={{ width: "100%", height: "100vh" }}></iframe>
  );
}

export default PdfRate;
