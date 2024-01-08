let obj1 = {
  shapeName: "Circle",
  shapeColor: "Red",
  shapeArea: "3.1415 * r * r",
};
console.log(obj1);
const copyObj = { ...obj1 };
copyObj.shapeColor = "Blue";
console.log(copyObj);
