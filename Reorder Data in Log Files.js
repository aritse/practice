/*
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const isLetterLog = log => isNaN(parseInt(log.split(" ")[1]));

  const indexOf = log => {
    const tokensA = log.split(" ");
    const idA = tokensA.shift();
    const wordsA = tokensA.join(" ");

    for (let i = 0; i < countLetterLogs; i++) {
      const tokensB = reordered[i].split(" ");
      const idB = tokensB.shift();
      const wordsB = tokensB.join(" ");

      if (wordsA < wordsB || (wordsA === wordsB && idA < idB)) return i;
    }
    return countLetterLogs;
  };

  const reordered = [];
  let countLetterLogs = 0;
  logs.forEach(log => {
    if (isLetterLog(log)) {
      reordered.splice(indexOf(log), 0, log);
      countLetterLogs++;
    } else reordered.push(log);
  });
  return reordered;
};

// Another JS solution found online with most votes
const reorderLogFiles = logs => {
  const body = s => s.slice(s.indexOf(" ") + 1);
  const isNum = c => /\d/.test(c);

  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    return n ? n : a.localeCompare(b);
  };

  const [letterLogs, digitLogs] = [[], []];
  for (const log of logs) {
    isNum(body(log)) ? digitLogs.push(log) : letterLogs.push(log);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};
