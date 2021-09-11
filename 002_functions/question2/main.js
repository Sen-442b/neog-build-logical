// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80


function areaOfHexagon(length){
    const result = ( 5.19615242271 / 2) *length*length //(3√3)/2 S*S (S is side/length of the shape)
    console.log("Area of the hexagon is" + result.toFixed(2));
    


}

areaOfHexagon(10)