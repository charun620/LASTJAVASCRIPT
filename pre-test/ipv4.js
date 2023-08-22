function Ip4val(ip) {
  const segments = ip.split('.');
  
  if (segments.length !== 4) {
    return false;  // IPv4 must have exactly 4 segments
  }
  
  for (const segment of segments) {
    const num = parseInt(segment, 10);

    if (isNaN(num) || num < 0 || num > 255 || String(num) !== segment) {
      return false;  // Invalid if not a number in the range 0-255 or contains leading zeros
    }
  }
  
  return true;
}
console.log(Ip4val("1.2.3.4"));
console.log(Ip4val("1.2.3"));
console.log(Ip4val("1.2.3.4.5"));
console.log(Ip4val("123.45.67.89"));
console.log(Ip4val("123.456.78.90"));
console.log(Ip4val("123.045.067.089"));


