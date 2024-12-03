const Last = [
  {"id": 1, "fileName": "File_1.pdf", "lastUsed": "2024-11-05T17:04:24", "department": "กฎหมาย", "team": "การสรรหาบุคลากร", "status": "เสร็จสิ้น"},
  {"id": 2, "fileName": "Document_2.docx", "lastUsed": "2024-10-28T13:55:24", "department": "ไอที", "team": "การปฏิบัติตามกฎหมาย", "status": "เสร็จสิ้น"},
  {"id": 3, "fileName": "File_3.pdf", "lastUsed": "2024-10-29T07:09:24", "department": "ทรัพยากรบุคคล", "team": "การสรรหาบุคลากร", "status": "กำลังดำเนินการ"},
  {"id": 4, "fileName": "File_4.pdf", "lastUsed": "2024-11-13T03:00:24", "department": "ไอที", "team": "พัฒนา", "status": "เสร็จสิ้น"},
  {"id": 5, "fileName": "Document_5.docx", "lastUsed": "2024-11-04T23:38:24", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "กำลังดำเนินการ"},
  {"id": 6, "fileName": "Document_6.docx", "lastUsed": "2024-11-20T10:10:00", "department": "วิจัยและพัฒนา", "team": "นวัตกรรม", "status": "เสร็จสิ้น"},
  {"id": 7, "fileName": "File_7.pdf", "lastUsed": "2024-11-22T11:30:45", "department": "กฎหมาย", "team": "การปฏิบัติตามกฎหมาย", "status": "กำลังดำเนินการ"},
  {"id": 8, "fileName": "Document_8.docx", "lastUsed": "2024-11-19T09:20:30", "department": "การเงิน", "team": "วิเคราะห์", "status": "เสร็จสิ้น"},
  {"id": 9, "fileName": "File_9.pdf", "lastUsed": "2024-11-18T15:50:00", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "กำลังดำเนินการ"},
  {"id": 10, "fileName": "File_10.pdf", "lastUsed": "2024-11-15T13:30:00", "department": "ทรัพยากรบุคคล", "team": "การสรรหาบุคลากร", "status": "กำลังดำเนินการ"},
  {"id": 11, "fileName": "Document_11.docx", "lastUsed": "2024-11-25T08:00:10", "department": "ไอที", "team": "พัฒนา", "status": "เสร็จสิ้น"},
  {"id": 12, "fileName": "File_12.pdf", "lastUsed": "2024-11-10T12:45:24", "department": "การเงิน", "team": "วิเคราะห์", "status": "กำลังดำเนินการ"},
  {"id": 13, "fileName": "Document_13.docx", "lastUsed": "2024-11-07T14:20:00", "department": "กฎหมาย", "team": "การสรรหาบุคลากร", "status": "เสร็จสิ้น"},
  {"id": 14, "fileName": "File_14.pdf", "lastUsed": "2024-10-30T17:55:44", "department": "วิจัยและพัฒนา", "team": "นวัตกรรม", "status": "เสร็จสิ้น"},
  {"id": 15, "fileName": "Document_15.docx", "lastUsed": "2024-11-23T06:10:00", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "เสร็จสิ้น"},
  {"id": 16, "fileName": "File_16.pdf", "lastUsed": "2024-10-25T10:05:00", "department": "ทรัพยากรบุคคล", "team": "การสรรหาบุคลากร", "status": "กำลังดำเนินการ"},
  {"id": 17, "fileName": "File_17.pdf", "lastUsed": "2024-11-02T08:30:45", "department": "การเงิน", "team": "วิเคราะห์", "status": "เสร็จสิ้น"},
  {"id": 18, "fileName": "Document_18.docx", "lastUsed": "2024-11-03T19:55:10", "department": "ไอที", "team": "การปฏิบัติตามกฎหมาย", "status": "กำลังดำเนินการ"},
  {"id": 19, "fileName": "File_19.pdf", "lastUsed": "2024-10-27T14:30:00", "department": "กฎหมาย", "team": "การสรรหาบุคลากร", "status": "เสร็จสิ้น"},
  {"id": 20, "fileName": "Document_20.docx", "lastUsed": "2024-11-26T12:10:00", "department": "ทรัพยากรบุคคล", "team": "การสรรหาบุคลากร", "status": "กำลังดำเนินการ"},
  {"id": 21, "fileName": "File_21.pdf", "lastUsed": "2024-11-04T17:25:10", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "เสร็จสิ้น"},
  {"id": 22, "fileName": "File_22.pdf", "lastUsed": "2024-10-31T09:45:24", "department": "ไอที", "team": "พัฒนา", "status": "เสร็จสิ้น"},
  {"id": 23, "fileName": "Document_23.docx", "lastUsed": "2024-11-16T16:50:00", "department": "การเงิน", "team": "วิเคราะห์", "status": "กำลังดำเนินการ"},
  {"id": 24, "fileName": "File_24.pdf", "lastUsed": "2024-11-21T18:30:00", "department": "ทรัพยากรบุคคล", "team": "การสรรหาบุคลากร", "status": "กำลังดำเนินการ"},
  {"id": 25, "fileName": "Document_25.docx", "lastUsed": "2024-11-08T10:55:00", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "เสร็จสิ้น"},
  {"id": 26, "fileName": "File_26.pdf", "lastUsed": "2024-11-12T07:45:10", "department": "กฎหมาย", "team": "การปฏิบัติตามกฎหมาย", "status": "กำลังดำเนินการ"},
  {"id": 27, "fileName": "Document_27.docx", "lastUsed": "2024-11-09T11:30:00", "department": "วิจัยและพัฒนา", "team": "นวัตกรรม", "status": "กำลังดำเนินการ"},
  {"id": 28, "fileName": "File_28.pdf", "lastUsed": "2024-11-17T08:00:00", "department": "การเงิน", "team": "วิเคราะห์", "status": "เสร็จสิ้น"},
  {"id": 29, "fileName": "Document_29.docx", "lastUsed": "2024-10-24T19:15:20", "department": "ไอที", "team": "พัฒนา", "status": "เสร็จสิ้น"},
  {"id": 30, "fileName": "File_30.pdf", "lastUsed": "2024-11-14T16:20:00", "department": "การตลาด", "team": "แบรนดิ้ง", "status": "กำลังดำเนินการ"},
  // เพิ่มเติมข้อมูลจนถึง 50 รายการ
];


export function fileData() {
  return Last.slice();
}
