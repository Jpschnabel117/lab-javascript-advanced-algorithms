class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl[this.MAX_SIZE - 1] === undefined) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.stackControl[0] === undefined) {
      return true;
    }
    return false;
  }

  push(item) {
    if (!this.canPush()) {
      throw new Error("STACK_OVERFLOW");
    } else {
      this.stackControl[this.stackControl.length] = item;
      return this.stackControl;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("STACK_UNDERFLOW");
    } else {
      let popped = this.stackControl[this.stackControl.length - 1];
      console.log(popped);
      this.stackControl[this.stackControl.length - 1] = undefined;
      return popped;
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
