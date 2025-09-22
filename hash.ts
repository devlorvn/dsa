export class HashTable<T = any> {
  private _table: [string, T][][];
  constructor(private _size: number) {
    this._table = new Array(_size);
  }

  private hash(key: string): number {
    // create index for key
    let total: number = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this._size;
  }

  public set(key: string, value: T) {
    const index: number = this.hash(key);
    // return this._table[index]
    let bucket: [string, T][] = this._table[index];

    if (!bucket) {
      this._table[index] = [[key, value]];
    } else {
      const sameKeyItem: [string, T] | undefined = bucket.find(
        (item: [string, T]) => item[0] === key
      );
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  public get(key: string): T | undefined {
    const index: number = this.hash(key);
    // return this._table[index];
    const bucket: [string, T][] = this._table[index];
    if (bucket) {
      const sameKeyItem: [string, T] | undefined = bucket.find(
        (item: [string, T]) => item[0] === key
      );
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  public remove(key: string) {
    const index: number = this.hash(key);
    // this._table[index] = undefined;
    const bucket: [string, T][] = this._table[index];
    if (bucket) {
      const sameKeyItem: [string, T] | undefined = bucket.find(
        (item: [string, T]) => item[0] === key
      );
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  public display() {
    for (let i = 0; i < this._table.length; i++) {
      if (this._table[i]) {
        console.log(i, this._table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 16);
table.set("phone", "0326779999");
table.display();

console.log(table.get("age"));
console.log(table.get("full_name"));
table.set("mane", "Luan");

table.remove("phone");
table.display();
