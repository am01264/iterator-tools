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
        let result;
        try {
            result = this.iterator.next();
        }
        catch (err) {
            this.emit('error', err);
            return;
        }
        if (result.value !== void 0) {
            this.push(result.value);
        }
        if (result.done) {
            this.push(null);
        }
    }
}
exports.StreamFromIterable = StreamFromIterable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBbUQ7QUFLbkQ7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBUyxXQUFXLENBQW9CLEtBQWU7SUFDbkQsT0FBeUIsS0FBSyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFnQixhQUFhLENBQUssR0FBaUIsRUFBRSxLQUE4QjtJQUUvRSxNQUFNLE9BQU8sR0FBd0IsQ0FBQyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7UUFDOUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFBO0lBRWxDLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFO1FBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0FBQ0wsQ0FBQztBQVhELHNDQVdDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUssR0FBaUIsRUFBRSxLQUE4QjtJQUVuRixNQUFNLE9BQU8sR0FBd0IsQ0FBQyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7UUFDOUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO0lBRW5DLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFO1FBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWJELDhDQWFDO0FBRUQsU0FBZ0IsYUFBYSxDQUFJLEdBQWlCLEVBQUUsTUFBMEM7SUFDMUYsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFD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