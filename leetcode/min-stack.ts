class MinStack {
    private stack: number[]
    private minStack: number[]
    constructor() {
        this.stack = []
        this.minStack = []
    }
    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val)
        }
      }
    pop(): void {
        const val = this.stack.pop()  
        if (val !== undefined && val === this.getMin()) {
            this.minStack.pop()
        }
    }
    top(): number {
        return this.stack[this.stack.length - 1]
    }
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}