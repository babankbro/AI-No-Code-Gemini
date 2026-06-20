---
tags: [workshop, session, dashboard, csv, camera]
day: 20
time: 14.30-15.30
owner: พี่อ๊อฟ
---

# 05 Dashboard จาก CSV และ Demo เปิดกล้องนับคน

## เป้าหมายของช่วงนี้

- ทำให้ผู้เรียนเห็นว่าเว็บแอปทำงานกับข้อมูลได้
- ใช้ CSV เป็น data source แรกสำหรับ dashboard
- สาธิต input จากกล้องเพื่อให้เห็นการต่อยอดกับโลกจริง

## วัตถุดิบที่ต้องมี

- ไฟล์ CSV ตัวอย่าง
- Landing page หรือ project จาก [[04 Landing Page ด้วย Antigravity]]
- Browser ที่อนุญาตใช้ camera ได้สำหรับ demo

## Flow การสอน 60 นาที

| นาที | เนื้อหา |
|---|---|
| 0-10 | อธิบาย CSV: ตารางข้อมูลที่เว็บอ่านได้ |
| 10-25 | Demo ให้ AI อ่าน CSV และออกแบบ dashboard |
| 25-40 | สร้าง dashboard: card, table, chart |
| 40-50 | Demo เปิดกล้อง/นับคน หรือจำลอง camera input |
| 50-60 | สรุปว่า data/input ทำให้เว็บกลายเป็น web app |

## โครง Dashboard ที่แนะนำ

- Summary cards 3 ใบ
- Table แสดงข้อมูล
- Chart 1-2 แบบ
- Filter/search ถ้าข้อมูลพอเหมาะ
- ข้อความเมื่อไม่มีข้อมูลหรือโหลดข้อมูลไม่ได้

## Prompt สร้าง Dashboard จาก CSV

```text
ฉันมีไฟล์ CSV ชื่อ [ชื่อไฟล์]

ช่วยสร้าง dashboard ที่:
- อ่านข้อมูลจาก CSV
- แสดง summary card 3-4 ใบ
- แสดงตารางข้อมูล
- แสดง chart ที่เหมาะกับข้อมูล
- มี filter หรือ search ถ้าทำได้
- ออกแบบให้ responsive

ก่อนเขียนโค้ด ให้ดูโครงสร้างข้อมูลแล้วอธิบายว่าจะทำ dashboard แบบไหน
```

## Camera Demo แบบไม่ลงลึก

**แนวคิดที่ต้องการสื่อ**
- Browser สามารถขอสิทธิ์ใช้กล้องได้
- เว็บสามารถรับ input จากอุปกรณ์จริง
- AI ช่วยสร้าง prototype ได้ แต่ต้องระวัง privacy และ permission

**Demo Prompt**

```text
สร้าง demo หน้าเว็บที่เปิดกล้องจาก browser และแสดงจำนวนคนแบบจำลอง
ถ้าระบบนับจริงซับซ้อนเกินไป ให้ทำ mock result ก่อน
เน้นให้ผู้เรียนเห็น flow: เปิดกล้อง -> อ่านภาพ -> แสดงผลลัพธ์
```

## จุดที่ต้องย้ำ

- Dashboard ที่ดีต้องตอบคำถาม ไม่ใช่แค่มีกราฟ
- CSV เหมาะกับเริ่มต้น แต่ถ้าต้องเก็บข้อมูลจริงควรไป Google Sheets หรือ Supabase
- Camera และ AI vision เป็น demo ต่อทางความคิด ไม่จำเป็นต้องทำ production ในคอร์สนี้

## Output ก่อนจบช่วง

- Dashboard prototype
- เข้าใจความต่างระหว่าง static page กับ data-driven page

## ส่งต่อช่วงถัดไป

ต่อไปจะเตรียมการเก็บงานและ deploy ด้วย [[06 Git GitHub Vercel - เตรียม Deploy]]
