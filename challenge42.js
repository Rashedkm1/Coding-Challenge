const circlesIntersect = (x1, y1, r1, x2, y2, r2) => {
  // Calculate the distance between the centers of the two circles
  //To calculate the distance between two points, you can use the following formula:
  //distance = square root of [(x2 - x1)^2 + (y2 - y1)^2]

  const xDiff = x2 - x1;
  const yDiff = y2 - y1;
  const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);

  // If the distance is less than the sum of the two radii, the circles intersect
  return distance < r1 + r2;

};
console.log(circlesIntersect(200, 200, 100, 300, 300, 50));