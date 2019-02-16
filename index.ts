
import { Readable, ReadableOptions } from 'stream';
import { stat } from 'fs';

type MatcherCallback<T> = ( item : T ) => boolean;

/**
 * This will override the type of any given object. 
 * 
 * WARNING: As this escapes the type-safety of TypeScript, never use on unknown 
 * data, use well crafted type-guards instead.
 * 
 * [Information on Type Guards]{@link https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types }
 * 
 * @param value The value to be casted to NewType
 */
function static_cast<NewType, OldType>( value : OldType ) : NewType {
    return <NewType><unknown>value;
}

export function iterable_find<T>( arr : Iterable<T>, value : T | MatcherCallback<T> ) {
        
    const matcher : MatcherCallback<T> = (typeof value === 'function')
        ? static_cast(value)
        : (item : T) => item === value
    
    for (const item of arr) {
        if (matcher(item)) {
            return item;
        }
    }
}

export function iterable_contains<T>( arr : Iterable<T>, value : T | MatcherCallback<T>) {

    const matcher : MatcherCallback<T> = (typeof value === 'function')
        ? static_cast(value)
        : (item : T) => item === value;

    for (const item of arr) {
        if (matcher(item)) {
            return true;
        }
    }
            
    return false;
}

export function iterable_sort<T>(arr : Iterable<T>, fnSort : (first : T, second : T) => number) : Iterable<T> {
    return [...arr].sort(fnSort);
}

export function *iterable_map<T, U>(arr : Iterable<T>, fnMap : (value : T) => U) : Iterable<U> {
    for (const item of arr) {
        yield fnMap(item);
    }
}

export function *iterable_filter<T>( arr : Iterable<T>, fnFilter : (value : T) => boolean) : Iterable<T> {
    for (const item of arr) {
        if (fnFilter(item)) {
            yield item;
        }
    }
}

export function *iterable_concat<T>( first : Iterable<T>, second : Iterable<T>) : Iterable<T> {
    for (const item of first) {
        yield item;
    }

    for (const item of second) {
        yield item;
    }
}

export function iterable_every<T>( arr : Iterable<T>, fnTest : (value : T) => boolean ) {
    for (const item of arr) {
        if (! fnTest(item)) {
            return false;
        }
    }

    return true;
}

export function iterable_forEach<T>( arr : Iterable<T>, fn : (value : T) => void ) {
    for (const item of arr) {
        fn(item)
    }
}

export function iterable_join<T>( arr : Iterable<T>, separator? : string ) : string {
    return [...arr].join(separator);
}

export function iterable_some<T>( arr : Iterable<T>, fnTest : ( value : T ) => boolean) {

    for (const item of arr) {
        if (fnTest(item)) {
            return true;
        }
    }

    return false;
}

/**
 * Takes the given amount of items from the iterable, then quits
 * 
 * @param arr The iterable to get items from
 * @param count The number of items to take
 */
export function *iterable_take<T>( arr : Iterable<T>, count : number) {
    
    const it = arr[Symbol.iterator]();
    for (let ixArr = 0; ixArr < count; ixArr++) {
        const next = it.next();

        if (next.value !== void 0) {
            yield next.value;
        }

        if (next.done) {
            // Die early if nothing more to come :(
            break;
        }
    }
    
}

export default function iterable_wrap<T>( it : Iterable<T> ) {
    return new It(it);
}

export class It<T> {

    private arr : Iterable<T>

    constructor(arr : Iterable<T>) {
        this.arr = arr;
    }

    contains( value : T | MatcherCallback<T>) {
        return iterable_contains(this.arr, value);
    }
    

    concat(second : Iterable<T>) {
        this.arr = iterable_concat(this.arr, second);
        return this;
    }

    every(fnTest : (value : T) => boolean) {
        return iterable_every(this.arr, fnTest);
    }

    some(fnTest : (value : T) => boolean) {
        return iterable_some(this.arr, fnTest);
    }

    forEach(fn : (value : T) => void) {
        iterable_forEach(this.arr, fn);
        return this;
    }

    join( separator? : string) {
        return iterable_join(this.arr, separator);
    }

    take( count : number ) {
        this.arr = iterable_take(this.arr, count);
        return this;
    }

    has(value : T | MatcherCallback<T>) {
        return iterable_contains(this.arr, value);
    }

    find(value : T | MatcherCallback<T>) {
        return iterable_find(this.arr, value);
    }

    filter(fnFilter : (value : T) => boolean) {
        this.arr = iterable_filter(this.arr, fnFilter);
        return this;
    }

    sort(fnSort : (first : T, second : T) => number) {
        this.arr = iterable_sort<T>(this.arr, fnSort);
        return this;
    }

    map<U>(fnMap : (value : T) => U) : It<U> {
        
        const castedIterable : It<U> = static_cast(this);
        castedIterable.arr = iterable_map<T,U>(this.arr, fnMap);
        return castedIterable;

    }
    
    toArray() {
        return [...this.arr];
    }

    toIterable() {
        return this.arr;
    }

    toString() {
        return this.join();
    }

    toStream(options? : ReadableOptions) {
        return new StreamFromIterable(this.arr, options);
    }
}

export class StreamFromIterable<T> extends Readable {
    
    private iterator : Iterator<T>

    constructor( it : Iterable<T>, options? : ReadableOptions) {
        super(options)
        this.iterator = it[Symbol.iterator]();
    }

    _read() {

        const result = this.iterator.next();

        if (result.value !== void 0) {
            this.push(result.value);
        }

        if (result.done) {
            this.push(null)
        }

    }

}