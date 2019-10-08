// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = fast = nums[0];
    do { [slow, fast] = [nums[slow], nums[nums[fast]]] }
    while (slow !== fast);

    let [ptr1, ptr2] = [nums[0], slow];
    while (ptr1 !== ptr2) [ptr1, ptr2] = [nums[ptr1], nums[ptr2]];
    return ptr1;
};

/*
idx: 0 1 2 3 4 5 6 7 8 9
val: 2 5 9 6 9 3 8 9 7 1

slow: 9 1 5 3 6 8 7
fast: 1 3 8 9 5 6 7

t this value, all I can say is that fast is ahead by
exactly one full cycle. It doesn't mean that this value
is the duplicate.
*/
console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]))

/**
 * Questions and assumptions:
 * Can I modify the input array? No, the array is read-only.
 * Are there time and space complexity constraints? Time must be less than O(n^2) and space
 *  complexity must be constant O(1).
 * How many duplicate numbers are there? There is only one duplicate number.
 */

/**
 * Thoughts:
 * Constant space means that I can't build up extra data structure off of n.
 * I can't loop over n to build a tree, stack, hash, array, heap, linked list.
 * Hash makes the solution trivial. I can't use a recursion either. Because it uses O(n)
 * space for stack for recursive calls.
 *
 * Quadratic time means that for every element of the array, I loop over the array to
 * find its duplicate. That's also trivial. Space complexity is constant.
 *
 * Read only array means I can't sort it. Time complexity is O(nlogn) better than O(n^2)
 * and space complexity is O(1) constant. I need to compare neighbors until two are the same.
 *
 * I can use cycle detection approach in linked list where fast and slow two pointers
 * until they intersect. For arrays, it's like the Amazing race reality show where teams arrive at
 * destination following clues. There are 2 teams, slow and fast. They start off at the same time.
 * Next time, they see each other at destination 'd', the fast team has already made one full
 * circle. There are only two conditions that makes infinite loop possible. First, the values
 * of array elements are permutation of the array index. If one of the array elements is not
 * one of the array index, then the cycle is broken because that index will never be visited.
 * Second, the array is circular if one of the indices is duplicated. Let's take an example,
 * idx: 0,1,2,3,4,5,6
 * val: 3,4,1,4,5,6,2
 *
 * Here, val 4 is duplicated.
 * According to the problem description, all vals are between 1 and 6. So, there is no val 0.
 * If there is no val 0, you can't get to idx 0, you can't get to val 3, you can't get idx 3
 * unless there is another val 3. It's like slow and fast Amazing Race teams start off
 * at the same time. When they arrive at another destination (index) same time,
 * they must have gotten the same clue (index) at different locations. Therefore, there
 * are duplicate values.
 */