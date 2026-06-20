---
tags: [workshop, session, supabase, database]
day: 21
time: 14.00-15.00
owner: แบงค์ + เปรม
---

# 10 Supabase Database - ฐานข้อมูลจริง

## เป้าหมายของช่วงนี้

- ให้ผู้เรียนเข้าใจว่า Supabase คือ database จริงสำหรับเว็บแอป
- ต่อยอดจาก Google Sheets ไปสู่ table ที่ใช้กับงาน deploy ได้
- ให้ AI ช่วยเชื่อม frontend กับ Supabase แบบเบื้องต้น

## เปรียบเทียบกับ Google Sheets

| หัวข้อ | Google Sheets | Supabase |
|---|---|---|
| เหมาะกับ | เริ่มต้น, demo, dashboard ง่าย | เว็บแอปจริง, ข้อมูลจริง |
| โครงสร้าง | sheet/row/column | table/row/column |
| ความสัมพันธ์ | ทำได้จำกัด | รองรับดีกว่า |
| สิทธิ์และ scale | จำกัด | เหมาะกับ production มากกว่า |

## Flow การสอน 60 นาที

| นาที | เนื้อหา |
|---|---|
| 0-10 | อธิบาย Supabase แบบภาษาคน |
| 10-20 | สร้าง Supabase project |
| 20-30 | สร้าง table จาก requirement |
| 30-40 | เพิ่มข้อมูลตัวอย่าง |
| 40-55 | ให้ AI เชื่อม frontend กับ Supabase |
| 55-60 | ทดสอบ insert/select และสรุปข้อควรระวัง |

## Table ตัวอย่างระบบจอง

### customers

| column | type แบบเข้าใจง่าย |
|---|---|
| id | รหัสลูกค้า |
| name | ชื่อลูกค้า |
| phone | เบอร์โทร |

### bookings

| column | type แบบเข้าใจง่าย |
|---|---|
| id | รหัสการจอง |
| customer_name | ชื่อลูกค้า |
| phone | เบอร์โทร |
| booking_datetime | วันเวลา |
| people_count | จำนวนคน |
| status | สถานะ |

## Prompt ให้ AI สร้าง Schema

```text
จาก requirement นี้ ช่วยออกแบบ Supabase table

Requirement:
[วาง requirement]

ขอผลลัพธ์เป็น:
- ชื่อตาราง
- column ที่ต้องมี
- type ที่เหมาะสม
- ข้อมูลตัวอย่าง 5 แถว
- คำแนะนำว่าหน้าเว็บควรอ่าน/เขียนข้อมูลอย่างไร
```

## Prompt ให้ AI เชื่อม Frontend กับ Supabase

```text
ช่วยเชื่อมฟอร์มใน frontend นี้กับ Supabase

ข้อมูล Supabase:
- Project URL: [ใส่ URL]
- Table: [ชื่อตาราง]
- Columns: [รายการ column]

ต้องการให้:
- เมื่อผู้ใช้กรอกฟอร์มและกดยืนยัน ให้บันทึกข้อมูลลง table
- แสดงข้อความสำเร็จเมื่อบันทึกได้
- แสดงข้อความ error เมื่อบันทึกไม่ได้

ก่อนแก้โค้ด ช่วยบอกไฟล์ที่จะต้องแก้ก่อน
```

## จุดที่ต้องย้ำ

- หลีกเลี่ยงการเปิดเผย secret key
- ใช้ anon key เฉพาะกรณีที่เข้าใจ policy
- งานจริงต้องคิดเรื่องสิทธิ์การอ่าน/เขียนข้อมูล
- วันนี้เน้น prototype และ concept

## Output ก่อนจบช่วง

- Supabase table
- ข้อมูลตัวอย่าง
- ฟอร์มหรือหน้าเว็บที่เชื่อม Supabase เบื้องต้น

## ส่งต่อช่วงถัดไป

ชิ้นงานทั้งหมดจะถูกตรวจและ deploy ใน [[11 Final Deploy - Show on Vercel]]
