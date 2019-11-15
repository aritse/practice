/* DESCRIPTION
In bubble sort, we start at the beginning of the array and swap the first two elements if the first element is greater than the second.
Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller elements
are slowly bubble up to the beginning of the list. */

var bubbleSort = function (numbers) {
    for (let i = 0; i < numbers.length - 1; i++)
        for (let j = i + 1; j < numbers.length; j++)
            if (numbers[i] > numbers[j])
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    return numbers;
};

const numbers = [1, 9, 87, 4, 3, 6, 109, 8, 4, 3, 27];
console.log(bubbleSort(numbers));