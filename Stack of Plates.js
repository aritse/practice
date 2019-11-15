/* DESCRIPTION
Implement a data structure of a set of stacks. When a sub stack size reaches a certain threshold, a new sub stack is
created. Implement push() and pop() functions. As a follow up, implement popAt(index) function to pop from
a specific sub stack at index. */

class SetOfStacks {
    constructor(threshold = 3) {
        this.threshold = threshold;
        this.stacks = [[]];
    }

    push(num) {
        if (this.stacks[this.stacks.length - 1].length === this.threshold)
            this.stacks.push([]);
        this.stacks[this.stacks.length - 1].push(num);
    }

    pop() {
        if (this.stacks[0].length === 0) throw Error("empty stack");
        if (this.stacks[this.stacks.length - 1].length === 0)
            this.stacks.pop();
        return this.stacks[this.stacks.length - 1].pop();
    }

    popAt(index) {
        if (index < 0 || index >= this.stacks.length) throw Error("index out of bound");
        const p = this.stacks[index].pop();
        if (this.stacks[index].length === 0)
            this.stacks.splice(index, 1);
        return p;
    }
}

// Driver
const setOfStacks = new SetOfStacks();
for (let i = 0; i < 13; i++)
    setOfStacks.push(i);
console.log(setOfStacks);
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.push(99);
console.log(setOfStacks);
setOfStacks.popAt(1);
setOfStacks.popAt(1);
setOfStacks.popAt(1);
console.log("Popped: ", setOfStacks.popAt(1));
setOfStacks.push(100);
setOfStacks.push(200);
console.log(setOfStacks);
