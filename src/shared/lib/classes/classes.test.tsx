import { classNames } from "./index";


describe('classes', () => {

    test('with only first param', () => {
        expect(classNames('some_class')).toBe('some_class');
    });

    test('with additional class', () => {
        const expected = classNames('some_class class1 class2');
        expect(classNames('some_class', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = classNames('some_class class1 class2 hovered scrollable');
        expect(classNames(
            'some_class',
            {hovered: true, scrollable: true},
            ['class1', 'class2'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = classNames('some_class class1 class2 scrollable');
        expect(classNames(
            'some_class',
            {hovered: false, scrollable: true},
            ['class1', 'class2'])).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = classNames('some_class class1 class2 hovered');
        expect(classNames(
            'some_class',
            {hovered: true, scrollable: undefined},
            ['class1', 'class2'])).toBe(expected);
    })
})