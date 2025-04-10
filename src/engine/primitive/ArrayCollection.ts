export default class ArrayCollection<T> implements Iterable<T> {
    _array: T[] = [];

    constructor(array: T[] = []) {
        this._array = array;
    }
    
    [Symbol.iterator](): Iterator<T> {
        let index = 0;
        const array = this._array;

        return {
            next(): IteratorResult<T> {
                if (index < array.length) {
                    return { value: array[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }

    get length(): number {
        return this._array.length;
    }

    get array(): T[] {
        return this._array;
    }

    get(index: number): T | undefined {
        return this._array[index];
    }

    add(item: T): void {
        this._array.push(item);
    }

    remove(index: number): void {
        this._array.splice(index, 1);
    }

    clear(): void {
        this._array.length = 0;
    }

    removeItem(item: T): void {
        const index = this.indexOf(item);
        if (index !== -1) {
            this.remove(index);
        }
    }

    indexOf(item: T): number {
        return this._array.indexOf(item);
    }

    contains(item: T): boolean {
        return this._array.includes(item);
    }
}