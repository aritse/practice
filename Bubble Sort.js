/* DESCRIPTION
In bubble sort, we start at the beginning of the array and swap the first two elements if the first element is greater than the second.
Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller elements
are slowly bubble up to the beginning of the list. */

var bubbleSort = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++)
        for (let j = 0; j < numbers.length - 1; j++)
            if (numbers[j] > numbers[j + 1])
                [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
    return numbers;
};

const numbers = Array(20);
for (let i = 0; i < 20; i++)
    numbers[i] = Math.random() * 100 | 0;
bubbleSort(numbers);
console.log(numbers);