import collections as chars


class Solution(object):
    def findAnagrams(self, s, p):
        slen, plen = len(s), len(p)
        if plen > slen:
            return []
        indices = []
        pcounter = chars.Counter(p)
        scounter = chars.Counter(s[:plen])
        for i, char in enumerate(s[:slen-plen+1]):
            if scounter == pcounter:
                indices.append(i)
            # slide over s
            if scounter[char] > 1:
                scounter[char] -= 1
            else:
                del scounter[char]
            if i < slen-plen:
                if scounter[s[i+plen]] is None:
                    scounter[s[i+plen]] = 1
                else:
                    scounter[s[i+plen]] += 1
        return indices
