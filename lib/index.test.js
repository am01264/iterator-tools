"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const index_1 = require("./index");
describe(index_1.iterable_find, () => {
    test.todo('finds the expected value');
    test.todo('finds the expected value, using a supplied function');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_contains, () => {
    test.todo('returns the correct response');
    test.todo('returns the correct response, using a supplied function');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_sort, () => {
    test.todo('accurately sorts the iterable');
    test.todo('throws an error when the supplied function fails');
});
describe(index_1.iterable_filter, () => {
    test.todo('filters as expected');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_concat, () => {
    test.todo('combines iterables as expected');
});
describe(index_1.iterable_every, () => {
    test.todo('accurately reports every item');
    test.todo('does not report false positive');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_forEach, () => {
    test.todo('iterates through each item');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_join, () => {
    test.todo('correctly joins the iterable without a given separator');
    test.todo('correctly joins the iterable with a given separator');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_some, () => {
    test.todo('correctly reports when at least one applies');
    test.todo('does not report false positive');
    test.todo('throws an error when supplied function fails');
});
describe(index_1.iterable_take, () => {
    test.todo('correctly handles 0-items');
    test.todo('correctly handles exhaustion of iterable before completing');
    test.todo('correctly takes `count` items from a problem-free array');
});
describe(index_1.default, () => {
    test.todo('creates an instance of class `It`');
});
describe(index_1.It, () => {
    describe('correctly forwards functions', () => {
        test.todo('test each method');
    });
    describe('toArray', () => {
        test.todo('avoids extra copies if array already present');
        test.todo('correctly copies array value');
        test.todo('throws an error when supplied function fails');
    });
    describe('toIterable', () => {
        test.todo('forwards iterable');
    });
    describe('toString', () => {
        test.todo('shows content in string form');
    });
    describe('toStream', () => {
        test.todo('returns a new ReadableStream');
        test.todo('creates a ReadableStream with options');
    });
});
describe(index_1.StreamFromIterable, () => {
    test.todo('iterates through the iterable');
    test.todo('ends response when no more data available');
    test.todo('forwards options to ReadableStream base');
    test.todo('reads final value, even if `result.done` is true');
    test.todo('throws an error when the iterator fails');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJpbmRleC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0JBQWM7QUFDZCxtQ0FBa087QUFFbE8sUUFBUSxDQUFDLHFCQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtJQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUE7SUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQzdELENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLHlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUE7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFBO0lBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyxxQkFBYSxFQUFFLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUE7SUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFBO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLHVCQUFlLEVBQUUsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsdUJBQWUsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFB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