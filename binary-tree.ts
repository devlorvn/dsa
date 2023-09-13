import Queue from "./queue/queue";

class _Node<T> {
  public left: _Node<T> | null = null;
  public right: _Node<T> | null = null;
  public value: T;
  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T = number> {
  public root: _Node<T> | null = null;
  constructor() {}

  public isEmpty(): boolean {
    return this.root === null;
  }

  public insert(value: T) {
    const newNode: _Node<T> = new _Node(value);
    if (this.root) {
      let root = this.root;
      while (true) {
        if (newNode.value < root.value) {
          if (root.left === null) {
            root.left = newNode;
            break;
          } else {
            root = root.left;
          }
        } else {
          console.log(root.right);
          if (root.right === null) {
            root.right = newNode;
            break;
          } else {
            root = root.right;
          }
        }
      }
    } else {
      this.root = newNode;
    }
  }

  public search(root: _Node<T> | null, value: T): boolean {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  //dfs root -> left -> right
  public preOrder(root: _Node<T> | null) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  //dfs left -> root -> right
  public inOrder(root: _Node<T> | null) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  //dfs left -> right -> root
  public postOrder(root: _Node<T> | null) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  //bfs
  public levelOrder() {
    if (!this.root) return;
    const queue: Queue<_Node<T>> = new Queue<_Node<T>>();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let current: _Node<T> = queue.dequeue();
      console.log(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
  }

  public min(root: _Node<T>): T {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  public max(root: _Node<T>): T {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  public delete(value: T) {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(root: _Node<T> | null, value: T): _Node<T> | null {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }

      // cách 1 bẻ min của bên phải lên làm root
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);

      // cách 2, bẻ max của bên trái lên làm root
      //   root.value = this.min(root.left);
      //   root.left = this.deleteNode(root.left, root.value);
    }
    return root;
  }
}

const bst: BinarySearchTree = new BinarySearchTree();

console.log("Tree is empty? ", bst.isEmpty());
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(12);
bst.insert(6);
bst.insert(9);
// console.log(bst.search(bst.root, 15));

// // bst.levelOrder();

// if (bst.root) {
//   console.log(bst.min(bst.root));
//   console.log(bst.max(bst.root));
// }

bst.delete(5);
bst.preOrder(bst.root);
