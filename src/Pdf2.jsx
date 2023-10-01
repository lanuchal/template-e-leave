import React from "react";
import { jsPDF } from "jspdf";
import checkImg from "./assets/imgs/check.png";

function Pdf2() {
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
      userLeaveOut == "0" ? "(ขออนุญาติออกนอกเขตจังหวัดสมุทรสาคร)" :""
    }`;

    const userLeaveOld = "4";
    const userLeaveNow = "5";
    const userLeaveSum = (
      parseInt(userLeaveOld) + parseInt(userLeaveNow)
    ).toString();

    const userLeaveTel = "0886584660";
    const insteadName = "นางสาวฉวีวรรณ ไตรรัตนานนท์";
    const insteadPosition = "ผู้อำนวนการกองเจ้าหน้าที่ ";
    const detail = `                ข้าพเจ้า ${userLeaveName}   ตำแหน่ง${userLeavePosition}  ฝ่าย${userLeaveDivision}  สังกัด${userLeaveAffiliation}  มีวันลาพักผ่อนสะสม  ${userLeaveActionOld}  วันทำการ มีสิทธิลาพักพ่อนประจำปีนี้  ${userLeaveActionNow}  วันทำการ รวมเป็น ${userLeaveActionSum} วันทำการ ขอลาพักพ่อน ตั้งแต่วันที่ ${userLeaveActiondateStart} ถึงวันที่ ${userLeaveActiondateEnd} มีกำหนด ${userLeaveActiondateSum} วัน ${userLeaveContact} หมายเลขโทรศัพท์ ${userLeaveTel}`;

    const checkName = "นางสาววินุรักษ์ สุขสำราญ";
    const checkAct = "0";
    const checkPosition = `${checkAct != "0" ? "รักษาการแทน " : ""}ผู้ตรวจสอบ`;
    const checkDate = `6 มีนาคม 2566`;


    const directorGroupName = "นายสมเกียรติ์ จันทร์ทอง";
    const directorGroupAct = "2";
    const directorGroupPosition = `${
      directorGroupAct != "0" ? "รักษาการแทน " : ""
    }ผู้อำนวยการโรงพยาบาลส่งเสริมสุขภาพตำบล`;
    const directorGroupDate = `6 มีนาคม 2566`;

    const headName = "นางสาวคณภัค เทพสังข์";
    const headComment = "เห็นสมควร";
    const headAct = "0";
    const headPosition = `${
      headAct != "0" ? "รักษาการแทน " : ""
    }ผู้บังคับบัญชา`;
    const headDate = `6 มีนาคม 2566`;

    const presidentName = "นายศักรินทร์ และล้ำเลิศ ";
    const presidentComment = "เห็นสมควร";
    const presidentAccess = "1";
    const presidentAct = "0";
    const presidentPosition = `${
      presidentAct != "0" ? "รักษาการแทน " : ""
    }นายกองค์การบริส่วนจังหวัด `;
    const presidentDate = `6 มีนาคม 2566`;

    const yCheck = 175;

    const yDirectorGroup = 135;
    const yHead = 205;
    const yPresident = 265;

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
    doc.text(head, 105, 15, null, null, "center");
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

    var splitTitle = doc.splitTextToSize(detail, 180);
    doc.setLineHeightFactor(1.2);
    doc.text(15, 55, splitTitle);

    doc.text("ขออนุญาตมอบหมายงานในหน้าที่ให้ " + insteadName, 15, 95);
    doc.text("ตำแหน่ง " + insteadPosition + " ปฏิบัติหน้าที่แทน", 15, 101);

    doc.text(
      "(ลงชื่อ)                          ผู้รับมอบ",
      60,
      118,
      null,
      null,
      "center"
    );
    doc.text(
      "(ลงชื่อ)                                                 ",
      159,
      95,
      null,
      null,
      "center"
    );
    doc.text("( " + userLeaveName + " )", 159, 105, null, null, "center");
    doc.text(userLeavePosition, 159, 111, null, null, "center");

    doc.text("สถิติการลาในปีงบประมาณ", 60, 129, null, null, "center");

    doc.rect(27, 131, 20, 15);
    doc.text("ลามาแล้ว\n(วันทำการ)", 37, 137, null, null, "center");
    doc.rect(47, 131, 20, 15);
    doc.text("ลาครั้งนี้\n(วันทำการ)", 57, 137, null, null, "center");
    doc.rect(67, 131, 20, 15);
    doc.text("รวมเป็น\n(วันทำการ)", 77, 137, null, null, "center");

    doc.rect(27, 146, 20, 10);
    doc.text(userLeaveOld, 37, 152, null, null, "center");
    doc.rect(47, 146, 20, 10);
    doc.text(userLeaveNow, 57, 152, null, null, "center");
    doc.rect(67, 146, 20, 10);
    doc.text(userLeaveSum, 77, 152, null, null, "center");

    doc.text("(ลงชื่อ)                                       ผู้ตรวจสอบ", 27, yCheck);
    doc.text("( " + checkName + " )", 60, yCheck + 6, null, null, "center");
    doc.text(checkPosition, 60, yCheck + 12, null, null, "center");
    doc.text(checkDate, 60, yCheck + 18, null, null, "center");


    doc.text("(ลงชื่อ)", 126, yDirectorGroup);
    doc.text(
      "( " + directorGroupName + " )",
      159,
      yDirectorGroup + 6,
      null,
      null,
      "center"
    );
    doc.text(
      directorGroupPosition,
      159,
      yDirectorGroup + 12,
      null,
      null,
      "center"
    );
    doc.text(directorGroupDate, 159, yDirectorGroup + 18, null, null, "center");


    doc.text("(ลงชื่อ)", 126, yHead);
    doc.text("( " + headName + " )", 159, yHead + 6, null, null, "center");
    doc.text(headPosition, 159, yHead + 12, null, null, "center");
    doc.text(headDate, 159, yHead + 18, null, null, "center");

    doc.text("(ลงชื่อ)", 126, yPresident);
    doc.text(
      "( " + presidentName + " )",
      159,
      yPresident + 6,
      null,
      null,
      "center"
    );
    doc.text(presidentPosition, 159, yPresident + 12, null, null, "center");
    doc.text(presidentDate, 159, yPresident + 18, null, null, "center");

    doc.setFont("Sarabun-Bold"); // set font
    doc.text("ความเห็นผู้บังคับบัญชา", 159, yHead - 22, null, null, "center");
    doc.setFont("Sarabun"); // set font
    doc.text(headComment, 159, yHead - 16, null, null, "center");
    doc.line(141, yHead - 21, 177, yHead - 21);
      
    doc.addImage(
      checkImg,
      "PNG",
      presidentAccess == "1" ? 130 : 160,
      yPresident - 26,
      5,
      5
    );

    doc.rect(129, yPresident - 25, 5, 5);
    doc.rect(159, yPresident - 25, 5, 5);
    doc.text("อนุญาติ", 137, yPresident - 21);
    doc.text("ไม่อนุญาติ", 167, yPresident - 21);
    doc.text(presidentComment, 159, yPresident - 14, null, null, "center");
    doc.setFont("Sarabun-Bold"); // set font
    doc.text("คำสั่ง", 127, yPresident - 28);
    doc.line(127, yPresident - 27, 135, yPresident - 27);

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

export default Pdf2;
