function oneAway(s, t) {
  const dp = Array.from(Array(s.length + 1), (a) =>
    Array(t.length + 1).fill(0)
  );

  for (let i = 0; i < dp[0].length; i++) dp[0][i] = i;
  for (let i = 0; i < dp.length; i++) dp[i][0] = i;

  for (let i = 1; i < dp.length; i++)
    for (let j = 1; j < dp[0].length; j++)
      dp[i][j] =
        s[i - 1] === t[j - 1]
          ? dp[i - 1][j - 1]
          : Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
  return dp[s.length][t.length] === 1;
}

console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "bale")); // true
console.log(oneAway("pale", "bake")); // false
