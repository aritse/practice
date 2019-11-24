/* DESCRIPTION
Randomly select a pivot and partition the array such that
all elements less the pivot are to the left of the pivot. */

var partition = function (numbers, p, q, pivot) {
    const segment = numbers.slice(p, q + 1);
    for (let i = p; i <= q; i++)
        numbers[i] = pivot;
    segment.forEach(num => {
        if (num < pivot) numbers[p++] = num;
        else if (num > pivot) numbers[q--] = num;
    });
    return p;
};

var quickSort = function (numbers, p, q) {
    if (p < q) {
        const mid = (p + q) / 2 | 0;
        const pivot = numbers[mid];
        const index = partition(numbers, p, q, pivot);
        quickSort(numbers, p, index - 1);
        quickSort(numbers, index + 1, q);
    }
};

var sort = function (numbers) {
    quickSort(numbers, 0, numbers.length - 1);
};

// Driver
const lengths = [19, 20];
lengths.forEach(length => {
    const numbers = Array(length);
    for (let i = 0; i < length; i++)
        numbers[i] = Math.random() * 100 | 0;
    console.log("Unsorted: ", numbers);
    const pivot = numbers[numbers.length / 2 | 0];
    const index = partition(numbers, 0, numbers.length - 1, pivot);
    sort(numbers);
    console.log("Sorted: ", numbers);
});
