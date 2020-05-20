/** In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

  */

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    const M = Array.from(Array(N), () => Array(N).fill(0));
    const colSum = Array(N).fill(0);
    const rowSum = Array(N).fill(0);

    trust.forEach(([i, j]) => (M[i - 1][j - 1] = 1));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            rowSum[i] += M[i][j];
            colSum[i] += M[j][i];
        }
    }

    let judge = colSum.indexOf(N - 1);
    return judge === -1 || rowSum[judge] > 0 ? -1 : judge + 1;
};
