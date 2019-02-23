/// <reference types="node" />
import { Readable, ReadableOptions } from 'stream';
declare type MatcherCallback<T> = (item: T) => boolean;
export declare function iterable_find<T>(arr: Iterable<T>, value: T | MatcherCallback<T>): T;
export declare function iterable_contains<T>(arr: Iterable<T>, value: T | MatcherCallback<T>): boolean;
export declare function iterable_sort<T>(arr: Iterable<T>, fnSort: (first: T, second: T) => number): Iterable<T>;
export declare function iterable_map<T, U>(arr: Iterable<T>, fnMap: (value: T) => U): Iterable<U>;
export declare function iterable_filter<T>(arr: Iterable<T>, fnFilter: (value: T) => boolean): Iterable<T>;
export declare function iterable_concat<T>(first: Iterable<T>, second: Iterable<T>): Iterable<T>;
export declare function iterable_every<T>(arr: Iterable<T>, fnTest: (value: T) => boolean): boolean;
export declare function iterable_forEach<T>(arr: Iterable<T>, fn: (value: T) => void): void;
export declare function iterable_join<T>(arr: Iterable<T>, separator?: string): string;
export declare function iterable_some<T>(arr: Iterable<T>, fnTest: (value: T) => boolean): boolean;
/**
 * Takes the given amount of items from the iterable, then quits
 *
 * @param arr The iterable to get items from
 * @param count The number of items to take
 */
export declare function iterable_take<T>(arr: Iterable<T>, count: number): IterableIterator<T>;
export default function iterable_wrap<T>(it: Iterable<T>): It<T>;
export declare class It<T> {
    private arr;
    constructor(arr: Iterable<T>);
    contains(value: T | MatcherCallback<T>): boolean;
    concat(second: Iterable<T>): this;
    every(fnTest: (value: T) => boolean): boolean;
    some(fnTest: (value: T) => boolean): boolean;
    forEach(fn: (value: T) => void): this;
    join(separator?: string): string;
    take(count: number): this;
    has(value: T | MatcherCallback<T>): boolean;
    find(value: T | MatcherCallback<T>): T;
    filter(fnFilter: (value: T) => boolean): this;
    sort(fnSort: (first: T, second: T) => number): this;
    map<U>(fnMap: (value: T) => U): It<U>;
    toArray(): T[];
    toIterable(): Iterable<T>;
    toString(): string;
    toStream(options?: ReadableOptions): StreamFromIterable<T>;
}
export declare class StreamFromIterable<T> extends Readable {
    private iterator;
    constructor(it: Iterable<T>, options?: ReadableOptions);
    _read(): void;
}
export {};
//# sourceMappingURL=index.d.ts.map