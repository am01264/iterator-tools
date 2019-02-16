import 'jest';
import iterable_wrap, { StreamFromIterable, iterable_find, iterable_contains, iterable_sort, iterable_forEach, It, iterable_filter, iterable_concat, iterable_every, iterable_join, iterable_some, iterable_take } from './index';

describe(iterable_find, () => {
    test.todo('finds the expected value')
    test.todo('finds the expected value, using a supplied function')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_contains, () => {
    test.todo('returns the correct response')
    test.todo('returns the correct response, using a supplied function')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_sort, () => {
    test.todo('accurately sorts the iterable')
    test.todo('throws an error when the supplied function fails')
});

describe(iterable_filter, () => {
    test.todo('filters as expected')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_concat, () => {
    test.todo('combines iterables as expected')
})

describe(iterable_every, () => {
    test.todo('accurately reports every item')
    test.todo('does not report false positive')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_forEach, () => {
    test.todo('iterates through each item')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_join, () => {
    test.todo('correctly joins the iterable without a given separator')
    test.todo('correctly joins the iterable with a given separator')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_some, () => {
    test.todo('correctly reports when at least one applies')
    test.todo('does not report false positive')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_take, () => {
    test.todo('correctly handles 0-items')
    test.todo('correctly handles exhaustion of iterable before completing')
    test.todo('correctly takes `count` items from a problem-free array')
})

describe(iterable_wrap, () => {
    test.todo('creates an instance of class `It`')
})

describe(It, () => {

    describe('correctly forwards functions', () => {
        test.todo('test each method')
    });

    describe('toArray', () => {
        test.todo('avoids extra copies if array already present')
        test.todo('correctly copies array value')
        test.todo('throws an error when supplied function fails')
    })

    describe('toIterable', () => {
        test.todo('forwards iterable')
    })

    describe('toString', () => {
        test.todo('shows content in string form')
    })

    describe('toStream', () => {
        test.todo('returns a new ReadableStream')
        test.todo('creates a ReadableStream with options')
    })

})

describe(StreamFromIterable, () => {
    test.todo('iterates through the iterable')
    test.todo('ends response when no more data available')
    test.todo('forwards options to ReadableStream base')
    test.todo('reads final value, even if `result.done` is true')
    test.todo('throws an error when the iterator fails')
});