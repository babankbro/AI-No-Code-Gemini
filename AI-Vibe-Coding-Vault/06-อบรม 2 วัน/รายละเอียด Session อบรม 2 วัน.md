---
tags: [workshop, session-detail]
---

# รายละเอียด Session อบรม 2 วัน

## 1. Motivation: ทำไมต้อง AI Vibe Coding

**ประเด็นหลัก**
- โลกการสร้างเว็บเปลี่ยนจาก "ต้องเขียนเองทั้งหมด" เป็น "สั่ง AI ให้ช่วยสร้าง"
- ผู้เรียนไม่ต้องเป็น programmer แต่ต้องคิดเป็น สั่งเป็น และตรวจเป็น
- ชิ้นงานในคอร์สนี้ต้องไปถึงเว็บจริง ไม่จบแค่ demo ในเครื่อง

**กิจกรรม**
- โชว์ตัวอย่างเว็บที่สร้างด้วย AI
- ถามผู้เรียนว่าอยากสร้างอะไร
- เชื่อมเข้ากับ [[เส้นทาง 6 ขั้น]]

## 2. Gemini Pro on Web

**ประเด็นหลัก**
- Gemini เป็นผู้ช่วยคิดก่อนลงมือสร้าง
- ใช้ช่วยแตก idea, เขียน prompt, วิเคราะห์ CSV, ร่าง dashboard และ landing page

**กิจกรรม**
- ให้ผู้เรียนใส่ไอเดียของตัวเอง
- ให้ Gemini ช่วยสรุปเป็น requirement เบื้องต้น
- ให้ Gemini ช่วยเขียน prompt สำหรับ Antigravity

**ผลลัพธ์**
- Prompt สำหรับสร้าง landing page
- โครงหน้าเว็บและข้อความบนหน้าเว็บ
- ไอเดีย dashboard จากข้อมูล CSV

## 3. Antigravity และ IDE

**ประเด็นหลัก**
- Antigravity คือศูนย์บัญชาการ AI Agent สำหรับสร้างเว็บ
- IDE คือพื้นที่ดูไฟล์ แก้โค้ด และรันโปรเจกต์
- ผู้เรียนต้องรู้พอจะสั่ง AI และตรวจผลได้

**กิจกรรม**
- ติดตั้งและ login
- เปิด project/workspace
- ทดลองสั่ง AI สร้างหน้าเว็บเล็ก ๆ
- เปิด preview ดูผล

## 4. Landing Page ด้วย Antigravity

**ประเด็นหลัก**
- Landing page คือจุดเริ่มต้นที่เหมาะกับผู้เรียนใหม่
- Prompt ที่ดีต้องมี context, goal, requirements, examples, format

**กิจกรรม**
- ใช้ prompt จาก Gemini
- สร้างหน้า hero, section รายละเอียด, CTA
- ให้ AI ปรับ responsive
- ให้ AI แก้จุดที่ไม่ตรงใจ

**ผลลัพธ์**
- Landing page ที่เปิดดูใน browser ได้

## 5. Dashboard จาก CSV และ Camera Demo

**ประเด็นหลัก**
- เว็บแอปจริงต้องทำงานกับข้อมูล ไม่ใช่แค่หน้า static
- CSV เป็นจุดเริ่มต้นที่เข้าใจง่ายสำหรับ dashboard
- Camera demo ใช้ให้เห็นว่าเว็บรับ input จากโลกจริงได้

**กิจกรรม**
- นำ CSV เข้า project
- ให้ AI สร้าง table, summary card, chart
- สาธิตการใช้กล้องหรือจำลองการนับคน

## 6. Git, GitHub, Vercel

**ประเด็นหลัก**
- Git เก็บประวัติ
- GitHub เก็บโค้ดบน cloud
- Vercel deploy เว็บให้คนเปิดใช้ได้

**กิจกรรม**
- ตรวจ Git
- สร้าง GitHub repo
- push code
- เชื่อม Vercel

## 7. Requirement และ UI/UX

**ประเด็นหลัก**
- ก่อนสั่ง AI ต้องรู้ว่าใครใช้ ทำอะไร เพื่ออะไร
- Flow บอกเส้นทางการใช้งาน
- Wireframe บอกโครงหน้าจอ

**กิจกรรม**
- ใช้ [[Requirement Sheet เทมเพลต]]
- วาด flow 3-5 ขั้น
- วาด wireframe 1-2 หน้า
- แปลงเป็น prompt

## 8. Google Sheets เป็น Database ตัวแรก

**ประเด็นหลัก**
- Sheet ช่วยให้เข้าใจ table, row, column ได้เร็ว
- เหมาะกับ dashboard และระบบเก็บข้อมูลง่าย ๆ

**กิจกรรม**
- สร้าง sheet
- กำหนด column
- ให้เว็บอ่านหรือจำลองการอ่านข้อมูล
- แสดง dashboard

## 9. API: ราคาทองและอุณหภูมิ

**ประเด็นหลัก**
- API คือช่องทางที่เว็บขอข้อมูลจากระบบอื่น
- ตัวอย่างราคาทองและอุณหภูมิทำให้เห็นข้อมูลสด

**กิจกรรม**
- ให้ AI อธิบาย API endpoint
- ดึงข้อมูลมาแสดงบนเว็บ
- จัดการ loading/error state แบบง่าย

## 10. Supabase

**ประเด็นหลัก**
- Supabase คือ database จริงที่เหมาะกับเว็บแอป
- ใช้ต่อยอดจากแนวคิด Google Sheets แต่รองรับงานจริงกว่า

**กิจกรรม**
- สร้าง project
- สร้าง table
- เพิ่มข้อมูลตัวอย่าง
- ให้ AI เชื่อม frontend กับ Supabase

## 11. Final Deploy

**ประเด็นหลัก**
- งานจบเมื่อมี URL ที่คนอื่นเปิดได้
- ผู้เรียนควรรู้ flow แก้ไขหลัง deploy

**กิจกรรม**
- ตรวจ error
- push GitHub
- deploy Vercel
- เปิด URL และทดสอบ
