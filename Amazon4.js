function criticalRouters(numRouters, numLinks, links) {
    for (let i = 0; i < numRouters; i++) {
        const copy = Array.from(links);
        for (let j = 0; j < copy.length; j++) {
            if (copy[j][0] === i || copy[j][1] === i) {
                delete copy[j];
            }
        }
        console.log(copy);

        return;
    }
}
// FUN


criticalRouters(7, 7, [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]);