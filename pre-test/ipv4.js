
function Ip4val(ip) {
  // แยกส่วนของ IP address เป็นช่วงต่าง ๆ โดยใช้จุดเป็นตัวคั่น
  const segments = ip.split('.');
  
  // ตรวจสอบว่ามีแค่ 4 ช่วงหรือไม่
  if (segments.length !== 4) {
    return false;  // IPv4 ต้องมีเพียง 4 ช่วง
  }
  
  // ตรวจสอบแต่ละช่วง
  for (const segment of segments) {
    // แปลงช่วงเป็นตัวเลขที่เป็นฐาน 10
    const num = parseInt(segment, 10);

    // ตรวจสอบว่าเป็นตัวเลขที่อยู่ในช่วง 0-255 และไม่มี leading zeros
    if (isNaN(num) || num < 0 || num > 255 || String(num) !== segment) {
      return false;  // คืนค่าfalseถ้าไม่ใช่ตัวเลขในช่วง 0-255 หรือมี leading zeros
    }
  }
  
  return true;  // ถ้าผ่านเงื่อนไขทั้งหมดให้คืนค่า true
}

// ทดสอบ
console.log(Ip4val("123.045.067.089")); // false
console.log(Ip4val("192.168.1.1"));     // true
console.log(Ip4val("256.0.0.1"));       // false
console.log(Ip4val("10.0.0"));          // false
console.log(Ip4val("abc.def.ghi.jkl")); // false

console.log(Ip4val("1.2.3.4"));
console.log(Ip4val("1.2.3"));
console.log(Ip4val("1.2.3.4.5"));
console.log(Ip4val("123.45.67.89"));
console.log(Ip4val("123.456.78.90"));
console.log(Ip4val("123.045.067.089"));


