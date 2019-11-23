/* DESCRIPTION
Divide the array in half, sort each half, and then merge the sorted arrays into one */

var merge = function (numbers, first, second) {
    for (let i = 0; i < numbers.length; i++) {
        if (first.length < 1) numbers[i] = second.shift();
        else if (second.length < 1) numbers[i] = first.shift();
        else numbers[i] = first[0] <= second[0] ? first.shift() : second.shift();
    }
};

var mergeSort = function (numbers) {
    if (numbers.length > 1) {
        const mid = numbers.length / 2 | 0;
        const [first, second] = [numbers.slice(0, mid), numbers.slice(mid)];
        mergeSort(first);
        mergeSort(second);
        merge(numbers, first, second);
    }
};

// Driver
const odd = Array(9); // odd length
for (let i = 0; i < 9; i++)
    odd[i] = Math.random() * 100 | 0;
mergeSort(odd);
console.log(odd);

const even = Array(10); // odd length
for (let i = 0; i < 10; i++)
    even[i] = Math.random() * 100 | 0;
mergeSort(even);
console.log(even);

