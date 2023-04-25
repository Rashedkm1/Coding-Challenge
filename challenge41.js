// Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates

const calculateDistance = (x1, y1, x2, y2) => {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    //To calculate the distance between two points, you can use the following formula:
    //distance = square root of [(x2 - x1)^2 + (y2 - y1)^2]
    const distance = Math.sqrt(xDiff ** 2 + yDiff ** 2);
    return distance;
}

console.log(calculateDistance(100, 100, 400, 300));;