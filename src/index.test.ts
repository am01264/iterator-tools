import 'jest';
import iterable_wrap, { StreamFromIterable, iterable_find, iterable_contains, iterable_sort, iterable_forEach, It, iterable_filter, iterable_concat, iterable_every, iterable_join, iterable_some, iterable_take } from './index';

describe(iterable_find, () => {
    test('finds the expected value', () => {
        const source = [1, 2, 3];
        expect(iterable_find(source, 2)).toBe(2);
    })
    
    test.todo('finds the expected value, using a supplied function')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_contains, () => {
    test('returns the correct response', () => {
        const source = [1, 2, 3];
        expect(iterable_contains(source, 2)).toBeTruthy();
    })

    test.todo('returns the correct response, using a supplied function')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_sort, () => {
    test('accurately sorts the iterable', () => {
        const source = [5, 1, 3];
        const compareFn = (a, b) => a - b
        expect([...iterable_sort(source, compareFn)]).toStrictEqual(source.sort(compareFn))
    })
    test.todo('throws an error when the supplied function fails')
});

describe(iterable_filter, () => {
    test('filters as expected', () => {

        const source = [3, 2, 1];
        const filterFn = (val) => val > 1;
        expect([...iterable_filter(source, filterFn)]).toStrictEqual(source.filter(filterFn))
        
    })

    test.todo('throws an error when supplied function fails')
})

describe(iterable_concat, () => {
    test('combines iterables as expected', () => {
        const sourceA = [1, 2];
        const sourceB = [3];

        expect([...iterable_concat(sourceA, sourceB)]).toStrictEqual(sourceA.concat(sourceB));
    })
})

describe(iterable_every, () => {
    test('accurately reports every item', () => {
        expect(iterable_every([2,4,6], (val) => val % 2 == 0)).toBeTruthy();
    })
    test.todo('does not report false positive')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_forEach, () => {
    test('iterates through each item', (cbDone) => {
        const mockFn = jest.fn();
        const source = [1,2,3];
        iterable_forEach(source, mockFn);
        expect(mockFn).toBeCalledTimes(source.length);
        cbDone();
    })
    test.todo('throws an error when supplied function fails')
})

describe(iterable_join, () => {
    test('correctly joins the iterable without a given separator', () => {
        const source = [1, 2]
        expect(iterable_join(source)).toStrictEqual(source.join())
    })

    test('correctly joins the iterable with a given separator', () => {
        const source = [1, 2]
        const separator = ':'
        expect(iterable_join(source, separator)).toStrictEqual(source.join(separator))
    })
    test.todo('throws an error when supplied function fails')
})

describe(iterable_some, () => {
    test('correctly reports when at least one applies', () => {
        const source = [1,2,3];
        const fnCondition = (val) => val % 2 === 0;

        expect(iterable_some(source, fnCondition)).toBeTruthy();
    })

    test.todo('does not report false positive')
    test.todo('throws an error when supplied function fails')
})

describe(iterable_take, () => {
    test('correctly handles 0-items', () => {
        expect([...iterable_take([], 0)]).toStrictEqual([]);
    })

    test.todo('correctly handles exhaustion of iterable before completing')

    test('correctly takes `count` items from a problem-free array', () => {
        const source = [1,2,3];
        expect([...iterable_take(source, 2)]).toStrictEqual([1,2])
    })
})

describe(iterable_wrap, () => {
    test('creates an instance of class `It`', () => {
        const result = iterable_wrap([]);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(It);
    })
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