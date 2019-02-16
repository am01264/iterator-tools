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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQkFBYztBQUNkLG1DQUFrTztBQUVsTyxRQUFRLENBQUMscUJBQWEsRUFBRSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMscURBQXFELENBQUMsQ0FBQTtJQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFRLENBQUMseUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLHlEQUF5RCxDQUFDLENBQUE7SUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQzdELENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLHFCQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQTtJQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtEQUFrRCxDQUFDLENBQUE7QUFDakUsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsdUJBQWUsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQUMsQ0FBQTtBQUVGLFFBQVEsQ0FBQyx1QkFBZSxFQUFFLEdBQUcsRUFBRTtJQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFR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