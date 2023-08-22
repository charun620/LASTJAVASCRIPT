function bomb(sensors) {
    const [sensor1, sensor2, sensor3] = sensors;
    const [x1, y1, t1] = sensor1;
    const [x2, y2, t2] = sensor2;
    const [x3, y3, t3] = sensor3;
    
    const speedOfSound = 0.343; // Speed of sound in air (km/s)
    
    const d1 = speedOfSound * t1;
    const d2 = speedOfSound * t2;
    const d3 = speedOfSound * t3;
    
    const A = 2 * (x2 - x1);
    const B = 2 * (y2 - y1);
    const E = (d1 ** 2 - d2 ** 2 - x1 ** 2 + x2 ** 2 - y1 ** 2 + y2 ** 2);
    
    const C = 2 * (x3 - x2);
    const D = 2 * (y3 - y2);
    const F = (d2 ** 2 - d3 ** 2 - x2 ** 2 + x3 ** 2 - y2 ** 2 + y3 ** 2);
    
    let xb = (E * D - F * B) / (A * D - B * C);
    let yb = (E * C - F * A) / (B * C - A * D);
    xb = Math.abs(xb)
    yb = Math.abs(yb)
    return [Math.round(xb), Math.round(yb)]; // Rounding the values for cleaner output
  }
  
  // Test cases
  console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // [0, 25]
  console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [0, 0]
  console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // [21, 13]
  console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // [8, 35]
  