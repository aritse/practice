class Solution(object):
    def isValid(self, s):
        parens = list(s)
        stack = []
        for paren in parens:
            if paren in ['(', '[', '{']:
                stack.append(paren)
            else:
                try:
                    popped = stack.pop()
                except:
                    return False
                if paren == ')' and popped != '(' or paren == ']' and popped != '[' or paren == '}' and popped != '{':
                    return False
        if stack:
            return False
        return True
