n = int(input())
x = [int(i) for i in input().split()]
stack, top, cnt = [], -1, 0
stack.append((x[0], 1))
for i in range(1, n):
    while stack and x[i] > stack[top][0]:
        stack.pop()
        cnt += 1

    if stack == []:
        stack.append((x[i], 1))
    else:
        if x[i] < stack[top][0]:
            stack.append((x[i], 1))
            cnt += 1
        else:
            if len(stack) != stack[top][1]:
                cnt += 1
            cnt += stack[top][1]
            stack.append((x[i], stack[top][1]+1))
print(cnt)
