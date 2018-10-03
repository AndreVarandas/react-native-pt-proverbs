/* eslint import/prefer-default-export: 0  */
export const shuffle = (array) => {
  const newArray = array;
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter -= 1;
    // And swap the last element with it
    const temp = array[counter];
    newArray[counter] = array[index];
    newArray[index] = temp;
  }

  return newArray;
};
