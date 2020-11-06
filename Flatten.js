function flatten(nested) {
  const flattened = [];

  const helper = (nested) => {
    if (nested.length === 0) return;

    const first = nested[0];
    if (Array.isArray(first)) helper(first);
    else flattened.push(first);

    helper(nested.slice(1));
  };

  helper(nested);
  return flattened;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
