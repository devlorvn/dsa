class Graph {
  public adjacencyList: Record<string, Set<string>>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  public hasEdge(vertex1: string, vertex2: string): boolean {
    return this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1);
  }

  public removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  public removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjVertex);
    }

    delete this.adjacencyList[vertex];
  }

  public display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph: Graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("C", "B");
graph.addEdge("A", "C");

graph.removeVertex("A");
graph.display();

console.log(graph.hasEdge("A", "C"));
