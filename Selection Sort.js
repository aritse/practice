/* DESCRIPTION
In selection sort, we scan the list, find the smallest element and swap it with the first. Then, we find the second smallest
element and swap it with the second element in the list. */

var selectionSort = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[j] < numbers[smallest])
                smallest = j;
        [numbers[i], numbers[smallest]] = [numbers[smallest], numbers[i]];
    }
};

const numbers = Array(20);
for (let i = 0; i < 20; i++)
    numbers[i] = Math.random() * 100 | 0;
selectionSort(numbers);
console.log(numbers);