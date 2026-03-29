class MyStack {
    q1: number[];
    q2: number[];
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x: number): void {
        this.q1.push(x);
    }

    getPopOrTop(getTop: boolean): number {
        let n = this.q1.length; 
        for(let i = 0; i < n - 1; i++) {
            let deque = this.q1.shift();
            this.q2.push(deque)
        }
        let peek = this.q1.shift();
        if(getTop) {
            this.q2.push(peek);
        }
        this.q1 = this.q2;
        this.q2 = [];
        return peek;
    }

    pop(): number {
        return this.getPopOrTop(false)
    }

    top(): number {
        return this.getPopOrTop(true)
    }

    empty(): boolean {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */