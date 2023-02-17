function inArray(a1, a2) {
  return a1
    .filter((substr) => a2.some((str) => str.includes(substr)))
    .sort();
}

inArray(
  ['live', 'arp', 'strong'],
  ['lively', 'alive', 'harp', 'sharp', 'armstrong']
);

// function inArray(array1, array2){
//   let result = [];

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array2[j].includes(array1[i])) {
//         result.push(array1[i]);
//       }
//     }
//   }
//   let mySet = new Set(result);
//   let myArr = [...mySet];
//   return myArr.sort();
// }
