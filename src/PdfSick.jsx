import React from "react";
import { jsPDF } from "jspdf";
import checkImg from "./assets/imgs/check.png";

function PdfSick() {
  const genPdf = () => {
    const head = "แบบบันใบลาป่วย ลาคลอดบุตร ลากิจส่วนตัว";
    const writeAddress = "โรงเรียน";
    const writeDate = "1 มีนาคม 2566";
    const title = "ขอลาป่วย";
    const infrom = "ผู้อำนวยการกองสาธารณสุข";
    const userLeaveName = "นางสาวกวิตา ทองสอน";
    const userLeavePosition = "นักวิชาการศึกษาปฏิบัติการ";
    const userLeaveDivision = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";
    const userLeaveAffiliation = "กองการศึกษาศาสนา และวัฒนธรรม (โรงเรียน)";

    const userLeaveTel = "0886584660";
    const detail = `                ข้าพเจ้า ${userLeaveName}   ตำแหน่ง${userLeavePosition}  ฝ่าย${userLeaveDivision}  สังกัด${userLeaveAffiliation}`;

    const yLeaveType = 67;
    var xLeaveType = 0;
    const sickType = "1";
    const sickRemark = "เนื่องจาก ไปหาหมอ";

    var yCheckSick = 0;
    if (sickType == "1") {
      yCheckSick = 66;
      xLeaveType = 41;
    } else if (sickType == "2") {
      yCheckSick = 73;
      xLeaveType = 60;
    } else if (sickType == "3") {
      yCheckSick = 80;
      xLeaveType = 87;
    }

    const sickStart = "29 มีนาคม 2566";
    const sickEnd = "30 มีนาคม 2566";
    const sickAction = "3";

    const sickStartOld = "8 มีนาคม 2566";
    const sickEndOld = "14 มีนาคม 2566";
    const sickActionOld = "5";
    const sickContact =
      "169 ถนนลงหาดบางแสง ตำบลแสนสุข อำเภอเมืองชลบุรี จังหวัดชลบุรี 20131";

    const detailSick = `                ตั้งแต่วันที่   ${sickStart}   ถึงวันที่   ${sickEnd}   มีกำหนด   ${sickAction}   วัน        \nข้าพเจ้าได้ลา           ป่วย          กิจส่วนตัว          คลอดบุตร      ครั้งสุดท้ายลาตั้งแต่วันที่   ${sickStartOld}   ถึงวันที่   ${sickEndOld} มีกำหนด ${sickActionOld} วัน ในระหว่างลาติดต่อข้าพเจ้าได้ที่ ${sickContact} หมายเลขโทรศัพท์ ${userLeaveTel}`;

    const checkName = "นางสาววินุรักษ์ สุขสำราญ";
    const checkAct = "0";
    const checkPosition = `${checkAct != "0" ? "รักษาการแทน " : ""}ผู้ตรวจสอบ`;
    const checkDate = `6 มีนาคม 2566`;

    const directorName = "นางสาวฉวีวรรณ ไตรรัตนานนท์ ";
    const directorAct = "0";
    const directorPosition = `${
      directorAct != "0" ? "รักษาการแทน " : ""
    }ผู้อำนวนการกองเจ้าหน้าที่`;
    const directorDate = `6 มีนาคม 2566`;

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

    const yLicense = 150;
    const yCheck = 210;
    const yUser = 130;
    const yDirector = 160;
    const yHead = 210;
    const yPresident = 266;

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
    doc.text("ขอลา", 15, yLeaveType + 11);
    doc.rect(30, yLeaveType, 5, 5);
    doc.rect(30, yLeaveType + 7, 5, 5);
    doc.rect(30, yLeaveType + 14, 5, 5);
    doc.text("ป่วย", 40, yLeaveType + 4);
    doc.text("กิจส่วนตัว", 40, yLeaveType + 11);
    doc.text("คลอดบุตร", 40, yLeaveType + 18);
    doc.text(sickRemark, 62, yCheckSick + 5);
    doc.addImage(checkImg, "PNG", 31, yCheckSick, 5, 5);

    doc.rect(40, yLeaveType + 30, 5, 5);
    doc.rect(59, yLeaveType + 30, 5, 5);
    doc.rect(86, yLeaveType + 30, 5, 5);
    doc.addImage(checkImg, "PNG", xLeaveType, yLeaveType + 29, 5, 5);

    var splitTitle = doc.splitTextToSize(detailSick, 180);
    doc.setLineHeightFactor(1.2);
    doc.text(15, 95, splitTitle);

    doc.text("(ลงชื่อ)", yLicense - 35, yUser);
    doc.text(
      "( " + userLeaveName + " )",
      yLicense,
      yUser + 6,
      null,
      null,
      "center"
    );
    doc.text(userLeavePosition, yLicense, yUser + 12, null, null, "center");
    // doc.text(deputyDate, yLicense, yUser + 18, null, null, "center");

    doc.text("(ลงชื่อ)", yLicense - 35, yDirector);
    doc.text(
      "( " + directorName + " )",
      yLicense,
      yDirector + 6,
      null,
      null,
      "center"
    );
    doc.text(directorPosition, yLicense, yDirector + 12, null, null, "center");
    doc.text(directorDate, yLicense, yDirector + 18, null, null, "center");

    doc.text("(ลงชื่อ)", yLicense - 35, yHead);
    doc.text("( " + headName + " )", yLicense, yHead + 6, null, null, "center");
    doc.text(headPosition, yLicense, yHead + 12, null, null, "center");
    doc.text(headDate, yLicense, yHead + 18, null, null, "center");

    doc.text("(ลงชื่อ)", yLicense - 35, yPresident);
    doc.text(
      "( " + presidentName + " )",
      yLicense,
      yPresident + 6,
      null,
      null,
      "center"
    );
    doc.text(
      presidentPosition,
      yLicense,
      yPresident + 12,
      null,
      null,
      "center"
    );
    doc.text(presidentDate, yLicense, yPresident + 18, null, null, "center");

    doc.setFont("Sarabun-Bold"); // set font
    doc.text(
      "ความเห็นผู้บังคับบัญชา",
      yLicense,
      yHead - 22,
      null,
      null,
      "center"
    );
    doc.setFont("Sarabun"); // set font
    doc.text(headComment, yLicense, yHead - 16, null, null, "center");
    doc.line(132, yHead - 21, 168, yHead - 21);

    doc.addImage(
      checkImg,
      "PNG",
      presidentAccess == "1" ? 123 : 153,
      yPresident - 26,
      5,
      5
    );
    doc.rect(122, yPresident - 25, 5, 5);
    doc.rect(152, yPresident - 25, 5, 5);

    doc.text("อนุญาติ", 129, yPresident - 21);
    doc.text("ไม่อนุญาติ", 159, yPresident - 21);
    doc.text(presidentComment, yLicense, yPresident - 14, null, null, "center");
    doc.setFont("Sarabun-Bold"); // set font
    doc.text("คำสั่ง", 114, yPresident - 28);
    doc.line(122, yPresident - 27, 114, yPresident - 27);
    // Log the base64 data to the console

    const yTable = 136;
    doc.text("สถิติการลาในปีงบประมาณ", 39, yTable - 2);
    doc.rect(20, yTable, 20, 10);
    doc.rect(40, yTable, 20, 10);
    doc.rect(60, yTable, 20, 10);
    doc.rect(80, yTable, 20, 10);

    doc.rect(20, yTable + 10, 20, 15);
    doc.rect(40, yTable + 10, 20, 15);
    doc.rect(60, yTable + 10, 20, 15);
    doc.rect(80, yTable + 10, 20, 15);

    doc.rect(20, yTable + 25, 20, 15);
    doc.rect(40, yTable + 25, 20, 15);
    doc.rect(60, yTable + 25, 20, 15);
    doc.rect(80, yTable + 25, 20, 15);

    doc.rect(20, yTable + 40, 20, 15);
    doc.rect(40, yTable + 40, 20, 15);
    doc.rect(60, yTable + 40, 20, 15);
    doc.rect(80, yTable + 40, 20, 15);

    doc.setFont("Sarabun"); // set font
    doc.text("ประเภท", 24, yTable + 6);
    doc.text("ลามาแล้ว", 43, yTable + 6);
    doc.text("ลาครั้งนี้", 64, yTable + 6);
    doc.text("รวมเป็น", 84, yTable + 6);

    doc.text("ป่วย", 27, yTable + 19);
    doc.text("กิจส่วนตัว", 23, yTable + 34);
    doc.text("คลอดบุตร", 23, yTable + 49);

    doc.text("(วันทำการ)", 42, yTable + 15);
    doc.text("(วันทำการ)", 42, yTable + 30);
    doc.text("(วันทำการ)", 42, yTable + 45);
    doc.text("(วันทำการ)", 62, yTable + 15);
    doc.text("(วันทำการ)", 62, yTable + 30);
    doc.text("(วันทำการ)", 62, yTable + 45);
    doc.text("(วันทำการ)", 82, yTable + 15);
    doc.text("(วันทำการ)", 82, yTable + 30);
    doc.text("(วันทำการ)", 82, yTable + 45);

    doc.text("-", 49, yTable + 21);
    doc.text("-", 49, yTable + 36);
    doc.text("-", 49, yTable + 51);
    doc.text("-", 69, yTable + 21);
    doc.text("-", 69, yTable + 36);
    doc.text("-", 69, yTable + 51);
    doc.text("-", 89, yTable + 21);
    doc.text("-", 89, yTable + 36);
    doc.text("-", 89, yTable + 51);

    doc.text(
      "(ลงชื่อ)                                    ผู้ตรวจสอบ",
      28,
      yCheck
    );
    doc.text("( " + checkName + " )", 60, yCheck + 6, null, null, "center");
    doc.text(checkPosition, 60, yCheck + 12, null, null, "center");
    doc.text(checkDate, 60, yCheck + 18, null, null, "center");

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

export default PdfSick;
