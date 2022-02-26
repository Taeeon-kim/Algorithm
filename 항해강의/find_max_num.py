# -*- coding: utf-8 -*-
# 최대값 찾기

input = [3, 5, 6, 1, 2, 4]

def find_max_num(array):
 for num in array:
     for compare_num in array:
        #  print(num, compare_num)
         if num <compare_num: break
     else: return num
     print(num)    

result = find_max_num(input)
print(result)