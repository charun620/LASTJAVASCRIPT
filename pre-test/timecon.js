function digiclock(sec) {
  const hours = Math.floor((sec / 3600) % 24);
  const minutes = Math.floor((sec % 3600) / 60);
  const re = sec & 60;

  return console.log(`${hours}:${minutes}:${re}`);
}

digiclock(5025)