function stringCompression(s) {
  let t = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let j;
    for (j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      } else {
        t = t.concat(s[i], count.toLocaleString());
        count = 0;
        i = j - 1;
        break;
      }
    }
    if (j === s.length) {
      t = t.concat(s[i], count.toLocaleString());
      break;
    }
  }
  return s.length <= t.length ? s : t;
}

console.log(stringCompression("aaaaaaaabbbbcaa"));
console.log(stringCompression("aabbcaa"));
