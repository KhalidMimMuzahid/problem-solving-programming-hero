const rotateLeft = (arrays = [], rotationOrigin) => {
  if (!arrays?.length || !rotationOrigin) {
    return "please, pass a valid parameter";
  }
  let arrayFirstPart = [];
  let arraySecondPart = [];
  let leftRotatedArray = [];
  const rotationOriginIndex = arrays.indexOf(rotationOrigin);
  if (rotationOriginIndex === -1) {
    return `${rotationOrigin} is not in the array`;
  }
  for (let i = 0; i < arrays.length; i++) {
    if (i <= rotationOriginIndex) {
      arrayFirstPart.push(arrays[i]);
    } else {
      arraySecondPart.push(arrays[i]);
    }
    leftRotatedArray = [...arraySecondPart, ...arrayFirstPart];
  }
  return leftRotatedArray;
};
const leftRotatedArray = rotateLeft([1, 2, 3, 4, 5], 4);
console.log("leftRotatedArray:", leftRotatedArray);
