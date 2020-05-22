/** Given a string, sort it in decreasing order based on the frequency of characters. */

/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
    let ans = "";
    const count = Array(256).fill(0);
    s.split("").forEach((c) => count[c.charCodeAt(0)]++);
    for (let i = 0; i < 256; i++) {
        const next = Math.max(...count);
        if (next === 0) {
            return ans;
        }
        const idx = count.indexOf(next);
        const c = String.fromCharCode(idx);
        ans = ans.concat(c.repeat(count[idx]));
        count[idx] = 0;
    }
}
