class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl[this.MAX_SIZE - 1] === undefined) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.queueControl[0] === undefined) {
      return true;
    }
    return false;
  }

  enqueue(item) {
    if (!this.canEnqueue()) {
      throw new Error("QUEUE_OVERFLOW");
    } else {
      this.queueControl[this.queueControl.length] = item;
      return this.queueControl;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("QUEUE_UNDERFLOW");
    } else {
      return this.queueControl.shift();
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
