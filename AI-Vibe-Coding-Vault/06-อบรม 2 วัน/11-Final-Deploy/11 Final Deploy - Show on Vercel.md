---
tags: [workshop, session, final, deploy, vercel]
day: 21
time: 15.00-16.00
owner: แบงค์ + เปรม
---

# 11 Final Deploy - Show on Vercel

## เป้าหมายของช่วงนี้

- ให้ผู้เรียนตรวจชิ้นงานและ deploy ขึ้น Vercel
- แก้ error สำคัญให้ผ่าน
- เก็บ URL ของผู้เรียนเป็นผลลัพธ์สุดท้ายของอบรม

## Flow การสอน 60 นาที

| นาที | เนื้อหา |
|---|---|
| 0-10 | Checklist ก่อน deploy |
| 10-25 | Commit และ push ไป GitHub |
| 25-40 | Deploy บน Vercel |
| 40-50 | เปิด URL และทดสอบ flow |
| 50-60 | ผู้เรียนส่ง URL และสรุปบทเรียน |

## Checklist ก่อน Deploy

- [ ] เว็บเปิดในเครื่องได้
- [ ] ไม่มี error ใหญ่ใน console
- [ ] หน้าแรกดูครบ
- [ ] Dashboard หรือ data section แสดงผล
- [ ] ถ้ามี API ต้องมี loading/error state
- [ ] ถ้ามี form ต้องแสดง success/error
- [ ] mobile ไม่พัง

## Prompt ให้ AI ช่วยตรวจงานก่อน Deploy

```text
ช่วยตรวจโปรเจกต์นี้ก่อน deploy

ตรวจให้ครอบคลุม:
- มี error ที่ทำให้ build ไม่ผ่านไหม
- หน้าเว็บ responsive ไหม
- ปุ่มและ form ทำงานไหม
- มีข้อความ error/success ที่ผู้ใช้เข้าใจไหม
- มีไฟล์หรือ key อะไรที่ไม่ควร commit ไหม

ให้สรุปเป็น checklist ก่อน แล้วรอฉันยืนยันก่อนแก้
```

## Prompt แก้ Build Error

```text
ตอน deploy ขึ้น Vercel เจอ error นี้:
[วาง error]

ช่วยอธิบายสาเหตุแบบคนไม่มีพื้นฐาน
แล้วเสนอวิธีแก้เป็นขั้นตอน
หลังจากนั้นค่อยแก้โค้ดที่จำเป็น
```

## เกณฑ์ถือว่าจบ

- มี URL จาก Vercel
- เปิด URL แล้วเห็นหน้าเว็บ
- อธิบายได้ว่าเว็บทำอะไร
- อธิบายได้ว่าข้อมูลมาจากไหน: CSV, Google Sheets, API หรือ Supabase

## แบบฟอร์มส่งงาน

| รายการ | คำตอบ |
|---|---|
| ชื่อผู้เรียน/กลุ่ม | |
| ชื่อโปรเจกต์ | |
| URL Vercel | |
| ใช้ข้อมูลจาก | CSV / Google Sheets / API / Supabase |
| สิ่งที่ทำสำเร็จ | |
| สิ่งที่อยากต่อยอด | |

## สรุปปิดคอร์ส

ย้ำเส้นทางที่ผู้เรียนเดินมา:

```text
Idea
-> Prompt
-> Landing Page
-> Dashboard/Data
-> API/Database
-> GitHub
-> Vercel URL
```

## ต่อหลังอบรม

- ปรับ UI ให้เข้ากับธุรกิจจริง
- เพิ่ม form จริง
- ย้ายข้อมูลสำคัญไป Supabase
- เพิ่มหน้า admin
- กลับมาใช้ AI ช่วย debug และต่อยอดเป็นรอบ ๆ
