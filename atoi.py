import string


class Solution(object):
    def myAtoi(self, s):
        s = s.strip()
        negative = False
        if s.startswith('-'):
            negative = True
            s = s[1:]
        elif s.startswith('+'):
            negative = False
            s = s[1:]
        if s is None or not s.startswith(('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')):
            return 0
        integer = 0

        digits = dict(zip(string.digits, range(0, 10)))
        for i in range(len(s)):
            if s[i] not in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']:
                break
            integer *= 10
            integer += digits[s[i]]

        if negative:
            integer *= -1
        if integer < -2147483648:
            integer = -2147483648
        elif integer > 2147483647:
            integer = 2147483647
        return integer
