"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
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
function static_cast(value) {
    return value;
}
function iterable_find(arr, value) {
    const matcher = (typeof value === 'function')
        ? static_cast(value)
        : (item) => item === value;
    for (const item of arr) {
        if (matcher(item)) {
            return item;
        }
    }
}
exports.iterable_find = iterable_find;
function iterable_contains(arr, value) {
    const matcher = (typeof value === 'function')
        ? static_cast(value)
        : (item) => item === value;
    for (const item of arr) {
        if (matcher(item)) {
            return true;
        }
    }
    return false;
}
exports.iterable_contains = iterable_contains;
function iterable_sort(arr, fnSort) {
    return [...arr].sort(fnSort);
}
exports.iterable_sort = iterable_sort;
function* iterable_map(arr, fnMap) {
    for (const item of arr) {
        yield fnMap(item);
    }
}
exports.iterable_map = iterable_map;
function* iterable_filter(arr, fnFilter) {
    for (const item of arr) {
        if (fnFilter(item)) {
            yield item;
        }
    }
}
exports.iterable_filter = iterable_filter;
function* iterable_concat(first, second) {
    for (const item of first) {
        yield item;
    }
    for (const item of second) {
        yield item;
    }
}
exports.iterable_concat = iterable_concat;
function iterable_every(arr, fnTest) {
    for (const item of arr) {
        if (!fnTest(item)) {
            return false;
        }
    }
    return true;
}
exports.iterable_every = iterable_every;
function iterable_forEach(arr, fn) {
    for (const item of arr) {
        fn(item);
    }
}
exports.iterable_forEach = iterable_forEach;
function iterable_join(arr, separator) {
    return [...arr].join(separator);
}
exports.iterable_join = iterable_join;
function iterable_some(arr, fnTest) {
    for (const item of arr) {
        if (fnTest(item)) {
            return true;
        }
    }
    return false;
}
exports.iterable_some = iterable_some;
/**
 * Takes the given amount of items from the iterable, then quits
 *
 * @param arr The iterable to get items from
 * @param count The number of items to take
 */
function* iterable_take(arr, count) {
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
exports.iterable_take = iterable_take;
function iterable_wrap(it) {
    return new It(it);
}
exports.default = iterable_wrap;
class It {
    constructor(arr) {
        this.arr = arr;
    }
    contains(value) {
        return iterable_contains(this.arr, value);
    }
    concat(second) {
        this.arr = iterable_concat(this.arr, second);
        return this;
    }
    every(fnTest) {
        return iterable_every(this.arr, fnTest);
    }
    some(fnTest) {
        return iterable_some(this.arr, fnTest);
    }
    forEach(fn) {
        iterable_forEach(this.arr, fn);
        return this;
    }
    join(separator) {
        return iterable_join(this.arr, separator);
    }
    take(count) {
        this.arr = iterable_take(this.arr, count);
        return this;
    }
    has(value) {
        return iterable_contains(this.arr, value);
    }
    find(value) {
        return iterable_find(this.arr, value);
    }
    filter(fnFilter) {
        this.arr = iterable_filter(this.arr, fnFilter);
        return this;
    }
    sort(fnSort) {
        this.arr = iterable_sort(this.arr, fnSort);
        return this;
    }
    map(fnMap) {
        const castedIterable = static_cast(this);
        castedIterable.arr = iterable_map(this.arr, fnMap);
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
    toStream(options) {
        return new StreamFromIterable(this.arr, options);
    }
}
exports.It = It;
class StreamFromIterable extends stream_1.Readable {
    constructor(it, options) {
        super(options);
        this.iterator = it[Symbol.iterator]();
    }
    _read() {
        const result = this.iterator.next();
        if (result.value !== void 0) {
            this.push(result.value);
        }
        if (result.done) {
            this.push(null);
        }
    }
}
exports.StreamFromIterable = StreamFromIterable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFtRDtBQUtuRDs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFTLFdBQVcsQ0FBb0IsS0FBZTtJQUNuRCxPQUF5QixLQUFLLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQWdCLGFBQWEsQ0FBSyxHQUFpQixFQUFFLEtBQThCO0lBRS9FLE1BQU0sT0FBTyxHQUF3QixDQUFDLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztRQUM5RCxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUE7SUFFbEMsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7QUFDTCxDQUFDO0FBWEQsc0NBV0M7QUFFRCxTQUFnQixpQkFBaUIsQ0FBSyxHQUFpQixFQUFFLEtBQThCO0lBRW5GLE1BQU0sT0FBTyxHQUF3QixDQUFDLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztRQUM5RCxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxJQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFFbkMsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBYkQsOENBYUM7QUFFRCxTQUFnQixhQUFhLENBQUksR0FBaUIsRUFBRSxNQUEwQztJQUMxRixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMs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