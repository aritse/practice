import string


class Solution(object):
    def titleToNumber(self, s):
        cn = 0
        l = len(s)
        vals = dict(zip(string.ascii_lowercase, range(1, 27)))
        for i in range(l):
            cn += vals[s[l-i-1]] * pow(26, i)
        return cn
