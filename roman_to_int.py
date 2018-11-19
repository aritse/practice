class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        integer = 0
        i = 0
        l = len(s)
        while i < l:
            if s[i] == 'I':
                if i < l-1 and s[i+1] == 'V':
                    integer += 4
                    i += 1
                elif i < l-1 and s[i+1] == 'X':
                    integer += 9
                    i += 1
                else:
                    integer += 1
            elif s[i] == 'X':
                if i < l-1 and s[i+1] == 'L':
                    integer += 40
                    i += 1
                elif i < l-1 and s[i+1] == 'C':
                    integer += 90
                    i += 1
                else:
                    integer += 10
            elif s[i] == 'C':
                if i < l-1 and s[i+1] == 'D':
                    integer += 400
                    i += 1
                elif i < l-1 and s[i+1] == 'M':
                    integer += 900
                    i += 1
                else:
                    integer += 100
            elif s[i] == 'V':
                integer += 5
            elif s[i] == 'L':
                integer += 50
            elif s[i] == 'D':
                integer += 500
            elif s[i] == 'M':
                integer += 1000
            i += 1
        return integer
