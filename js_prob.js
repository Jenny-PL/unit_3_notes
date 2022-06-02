// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function (nums, k) {
//   const indexMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num in indexMap) {
//       indexMap[num].push(i); // what is happening here???
//     } else {
//       indexMap[num] = [i];
//     }
//   }
//   for (let key in indexMap) {
//     const arr = indexMap[key];
//     if (arr.length >= 2) {
//       for (let first = 0; first < arr.length - 1; first++) {
//         const second = first + 1;
//         if (arr[second] - arr[first] <= k) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };
