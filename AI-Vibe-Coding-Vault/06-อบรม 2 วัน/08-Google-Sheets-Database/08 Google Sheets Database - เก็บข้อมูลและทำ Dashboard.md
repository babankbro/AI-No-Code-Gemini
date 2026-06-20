---
tags: [workshop, session, google-sheets, database, dashboard]
day: 21
time: 10.30-12.00
owner: แบงค์ + เปรม
---

# 08 Google Sheets Database - เก็บข้อมูลและทำ Dashboard

## เป้าหมายของช่วงนี้

- ใช้ Google Sheets เป็น database ตัวแรกที่ผู้เรียนเข้าใจง่าย
- เชื่อมแนวคิด table, row, column กับ requirement
- ทำ dashboard จากข้อมูลที่เก็บใน sheet หรือจำลองจาก sheet

## แนวคิดหลัก

Google Sheets เหมาะกับการเริ่มสอน database เพราะผู้เรียนเห็นข้อมูลเป็นตารางทันที

| Database | Google Sheets |
|---|---|
| Table | Sheet/tab |
| Row | 1 แถวข้อมูล |
| Column | 1 ประเภทข้อมูล |
| Record | ข้อมูล 1 รายการ |

## Flow การสอน 90 นาที

| นาที | เนื้อหา |
|---|---|
| 0-15 | อธิบาย table, row, column จาก Google Sheets |
| 15-30 | สร้าง sheet จากข้อมูลที่ต้องเก็บใน requirement |
| 30-45 | ใส่ข้อมูลตัวอย่าง |
| 45-65 | ให้เว็บอ่านข้อมูลหรือจำลอง dashboard จาก sheet |
| 65-80 | สร้าง dashboard summary/table/chart |
| 80-90 | สรุปข้อจำกัดและส่งต่อไป Supabase |

## Schema ตัวอย่างระบบจอง

| column | ความหมาย |
|---|---|
| id | รหัสรายการ |
| customer_name | ชื่อลูกค้า |
| phone | เบอร์โทร |
| booking_date | วันที่จอง |
| booking_time | เวลาจอง |
| people_count | จำนวนคน |
| status | สถานะ |

## Prompt ให้ AI ช่วยออกแบบ Sheet

```text
จาก requirement นี้ ช่วยออกแบบ Google Sheet สำหรับเก็บข้อมูล

Requirement:
[วาง requirement]

ขอผลลัพธ์เป็น:
- ชื่อ sheet
- รายการ column
- ตัวอย่างข้อมูล 5 แถว
- คำอธิบายว่า column ไหนใช้ทำ dashboard ได้
```

## Prompt ทำ Dashboard จาก Sheet

```text
ช่วยสร้าง dashboard จากข้อมูลใน Google Sheets นี้

ข้อมูลมี column:
[ระบุ column]

Dashboard ต้องมี:
- จำนวนรายการทั้งหมด
- จำนวนรายการแยกตาม status
- ตารางข้อมูลล่าสุด
- chart ที่เหมาะสม
- ออกแบบให้ดูง่ายบนมือถือ
```

## จุดที่ต้องย้ำ

- Sheets ดีสำหรับเริ่มต้นและ demo
- ถ้าข้อมูลเยอะ ต้องมีสิทธิ์ผู้ใช้ หรือระบบจริงจัง ควรใช้ Supabase
- ตารางข้อมูลต้องมาจาก requirement ไม่ใช่คิดเอาหน้างาน

## Output ก่อนจบช่วง

- Sheet schema
- ข้อมูลตัวอย่าง
- Dashboard จากข้อมูล

## ส่งต่อช่วงถัดไป

ช่วงบ่ายจะต่อจาก data static ไปสู่ข้อมูลสดด้วย [[09 API ราคาทองและอุณหภูมิ]]
