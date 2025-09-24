class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
class MyLinkedList {
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private size: number;
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.size = 0;
    }

    get(index: number): number {
        if (index >= this.size || index < 0) return -1;
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr!.next
        }
        return curr!.val;
    }

    addAtHead(val: number): void {
        let newListNode = new ListNode(val);
        if (!this.head) {
            this.head = newListNode;
            this.tail = this.head;
        }
        else {
            newListNode.next = this.head;
            this.head = newListNode;
        }
        this.size++;
    }

    addAtTail(val: number): void {
        let newListNode = new ListNode(val);
        if (!this.tail) {
            this.head = newListNode;
            this.tail = this.head;
        }else {
            this.tail!.next = newListNode;
            this.tail = newListNode
        }
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size ||index < 0) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        };
        if (index === this.size) {
            this.addAtTail(val);
            return
        }
        let newListNode = new ListNode(val);
        let prev: ListNode = this.head!;
        for (let i = 0; i < index -1; i++) {
            prev = prev.next!;
        }

        newListNode.next = prev.next;
        prev.next = newListNode;
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index >= this.size || index < 0) return;
        if (index === 0) {
            this.head = this.head!.next;
            if (!this.head) this.tail = null;
        } else {
            let prev: ListNode = this.head!;
            for (let i = 0; i < index -1; i++) {
                prev = prev.next!;
            }
            if (index === this.size - 1) this.tail = prev;
            prev.next = prev.next!.next;
        }
        this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */