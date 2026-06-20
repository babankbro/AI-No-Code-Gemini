---
tags: [workshop, session, git, github, vercel, deploy]
day: 20
time: 15.30-16.30
owner: แบงค์ + เปรม
---

# 06 Git GitHub Vercel - เตรียม Deploy

## เป้าหมายของช่วงนี้

- ให้ผู้เรียนเข้าใจ flow จากโค้ดในเครื่องไปสู่เว็บออนไลน์
- ติดตั้ง/ตรวจ Git และเชื่อม GitHub
- เชื่อม Vercel เพื่อ deploy งาน

## อธิบายแบบภาษาคน

| เครื่องมือ | เปรียบเหมือน | ใช้ทำอะไร |
|---|---|---|
| Git | สมุดบันทึกประวัติ | เก็บว่าแก้ไฟล์อะไรไปบ้าง |
| GitHub | กล่องเก็บงานบน cloud | เก็บโค้ดให้ Vercel ดึงไป deploy |
| Vercel | เครื่องปล่อยเว็บ | ทำให้เว็บมี URL เปิดได้ |

## Flow การสอน 60 นาที

| นาที | เนื้อหา |
|---|---|
| 0-10 | อธิบาย Git -> GitHub -> Vercel |
| 10-20 | ตรวจ Git และ login GitHub |
| 20-35 | สร้าง repository และ push project |
| 35-50 | เชื่อม Vercel และ deploy |
| 50-60 | ทดสอบ URL และสรุป flow |

## Workflow ที่ต้องจำ

```text
แก้เว็บใน Antigravity
-> commit
-> push ไป GitHub
-> Vercel deploy
-> ได้ URL
```

## Checklist ผู้เรียน

- [ ] มี GitHub account
- [ ] Git ใช้งานได้
- [ ] สร้าง repository ได้
- [ ] push project ได้
- [ ] เชื่อม Vercel ได้
- [ ] เปิด URL ได้

## ปัญหาที่มักเจอ

- Git ยังไม่ได้ติดตั้ง
- Login GitHub ผิดบัญชี
- Repository เป็น private แล้ว Vercel เข้าถึงไม่ได้
- Project build ไม่ผ่าน
- ไม่รู้ว่า Vercel ต้องเลือก framework/preset อะไร

## วิธีแก้เร็ว

- ให้ผู้เรียนที่ติด setup จับคู่กับเพื่อนก่อน
- ใช้ project ตัวอย่างที่ build ผ่านแน่นอนสำหรับ demo
- จด error จาก Vercel แล้วให้ AI ช่วยอธิบายก่อนแก้

## ทวนช่วงเช้าวันที่ 21

ใช้หัวข้อนี้ทวนอีกครั้ง:

- commit คืออะไร
- push คืออะไร
- deploy คืออะไร
- แก้แล้วเว็บอัปเดตอย่างไร

## Output ก่อนจบช่วง

- ผู้เรียนพร้อม deploy
- อย่างน้อยผู้เรียนเห็นตัวอย่าง URL จาก Vercel
