// ให้ติดตั้งเป็นแอปบนหน้าจอหลักได้ — ไม่เก็บข้อมูลแคช ใช้ข้อมูลล่าสุดจากเน็ตเสมอ
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
