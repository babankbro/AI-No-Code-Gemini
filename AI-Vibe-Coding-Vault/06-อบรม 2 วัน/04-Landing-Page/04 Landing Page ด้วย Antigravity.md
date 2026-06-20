---
tags: [workshop, session, landing-page, antigravity]
day: 20
time: 13.00-14.30
owner: พี่อ๊อฟ
---

# 04 Landing Page ด้วย Antigravity

## เป้าหมายของช่วงนี้

- ให้ผู้เรียนสร้าง landing page จาก prompt ที่เตรียมด้วย Gemini
- ฝึกวงจร Vibe Coding: สั่ง -> ดูผล -> ตรวจ -> สั่งแก้
- ได้หน้าเว็บที่เป็นฐานสำหรับ dashboard/database ในช่วงถัดไป

## วัตถุดิบที่ต้องมี

- Prompt จาก [[02 Gemini Pro on Web - คิดไอเดีย Prompt Dashboard Landing Page]]
- Project ที่เปิดได้จาก [[03 Antigravity และ IDE - ติดตั้งและเริ่มใช้ Agent]]
- ชื่อธุรกิจ/โครงการของผู้เรียน

## Flow การสอน 90 นาที

| นาที | เนื้อหา |
|---|---|
| 0-10 | ทวน prompt ที่ดีตาม C-G-R-E-F |
| 10-25 | Demo สร้าง landing page จาก prompt |
| 25-40 | ตรวจผล: section ครบไหม ปุ่มชัดไหม responsive ไหม |
| 40-60 | Hands-on ผู้เรียนสร้าง landing page ของตัวเอง |
| 60-75 | สั่ง AI ปรับ UI: spacing, color, mobile, CTA |
| 75-90 | ตรวจชิ้นงานและบันทึกจุดที่ต้องต่อยอด |

## โครง Landing Page ที่แนะนำ

- Hero: ชื่อเว็บ, value proposition, ปุ่มหลัก
- Problem/Solution: ปัญหาที่แก้
- Features: จุดเด่น 3 ข้อ
- How it works: ขั้นตอนใช้งาน 3 ขั้น
- CTA: ปุ่มให้จอง/สมัคร/ติดต่อ
- Footer: ข้อมูลติดต่อ

## Prompt หลัก

```text
สร้าง landing page สำหรับ [ชื่อธุรกิจ/โปรเจกต์]

บริบท:
- กลุ่มผู้ใช้คือ [กลุ่มผู้ใช้]
- เป้าหมายของเว็บคือ [เป้าหมาย]

สิ่งที่ต้องมี:
- Hero section พร้อม headline, subheadline และปุ่มหลัก
- Section อธิบายบริการ/ฟีเจอร์ 3 ข้อ
- Section วิธีใช้งาน 3 ขั้น
- Call-to-action ท้ายหน้า
- Footer
- Responsive สำหรับมือถือและ desktop

สไตล์:
- ดูทันสมัย อ่านง่าย
- เหมาะกับ [ประเภทธุรกิจ]

ให้สร้างเป็นเว็บที่รันได้ทันที
```

## Prompt สำหรับสั่งแก้

```text
ช่วยปรับหน้านี้ให้เหมาะกับมือถือมากขึ้น
ปุ่มหลักต้องเห็นชัดในจอแรก
ลดข้อความที่ยาวเกินไป และจัด spacing ให้อ่านง่าย
```

```text
ช่วยตรวจ landing page นี้ว่า section ไหนยังไม่ชัด
เสนอรายการแก้ไขก่อน แล้วค่อยแก้โค้ด
```

## Checklist ตรวจชิ้นงาน

- [ ] เปิดเว็บได้
- [ ] มี hero section ชัด
- [ ] มี CTA
- [ ] มี section หลักอย่างน้อย 3 ส่วน
- [ ] เปิดบนจอเล็กแล้วไม่พัง
- [ ] ข้อความสื่อสารกับกลุ่มเป้าหมายตรง

## Output ก่อนจบช่วง

- Landing page เวอร์ชันแรก
- Prompt แก้ UI อย่างน้อย 1 รอบ
- รายการสิ่งที่จะต่อยอดเป็น dashboard/data

## ส่งต่อช่วงถัดไป

ใช้ landing page นี้เป็นฐานต่อยอดใน [[05 Dashboard จาก CSV และ Demo เปิดกล้องนับคน]]
