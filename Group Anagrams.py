# Given an array of strings, group anagrams together.

class Solution(object):
    def groupAnagrams(self, strs):
        groups =  collections.defaultdict(list)
        for s in strs:
            groups[tuple(sorted(s))].append(s)
        return groups.values()