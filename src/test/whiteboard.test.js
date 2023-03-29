// import { Whiteboard } from "../src/whiteboard";

// import {Whiteboard} from "../src/whiteboard.js";

import {Whiteboard} from "../rct/white_Board/Whiteboard";

describe("Whiteboard contstructor", () => {
    test("items can be ordered, does not throw exception", () => {
        const items = [
            {
                id: 'dog',
                lowerId: undefined,
                data: 'hello' },
            {
                id: 'hamster',
                lowerId: 'cat',
                data: 'hello' },
            {
                id: 'cat',
                lowerId: 'rabbit',
                data: 'hello' },
            {
                id: 'rabbit',
                lowerId: 'dog',
                data: 'hello'
            }
        ];

        new Whiteboard(items);
    });

    test("no items, does not throw exception", () => {
        new Whiteboard([]);
    });

    test("no bottom item, throws exception", () => {
        const items = [
            {
                id: 'dog',
                lowerId: 'zzz',
                data: 'hello' },
            { id: 'hamster',
                lowerId: 'cat',
                data: 'hello' },
            { id: 'cat',
                lowerId: 'rabbit',
                data: 'hello' },
            { id: 'rabbit',
                lowerId: 'dog',
                data: 'hello'
            }
        ];

        expect(() => { new Whiteboard(items) }).toThrow();
    });

    test("items cannot be ordered, throws exception", () => {
        const items = [
            { id: 'dog',
                lowerId: undefined,
                data: 'hello' },
            { id: 'hamster',
                lowerId: 'cat',
                data: 'hello' },
            { id: 'cat',
                lowerId: 'rabbit',
                data: 'hello'
            },
            {
                id: 'rabbit',
                lowerId: 'zzz',
                data: 'hello'
            }
        ];

        expect(() => {new Whiteboard(items)}).toThrow();
    });
});


/*

*/
