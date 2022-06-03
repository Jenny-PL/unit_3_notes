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

let tool_list = [
  {
    name: "Hammer",
    quantity: 35,
  },
  {
    name: "Axe",
    quantity: 18,
  },
  {
    name: "Bow",
    quantity: 17,
  },
];

const formatToolList = (toolsData) => {
  let msg = "Tool List:\n";
  for (let tool of toolsData) {
    msg += `Tool: ${tool.name}\nQuantity: ${tool["quantity"]}\nReserve Now!\nDonate Tool!\n---\n`;
  }
  return msg;
};

console.log(formatToolList(tool_list));
