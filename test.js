import test from 'ava';
import fn from './';

test('string', t => {
	const obj = {
		fooBar: 'hello',
		fooYo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	const expected = {
		Bar: 'hello',
		Yo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	t.same(fn(obj, 'foo', ''), expected);
	t.end();
});

test('regexp', t => {
	const obj = {
		fooBar: 'hello',
		fooYo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	const expected = {
		Bar: 'hello',
		Yo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	t.same(fn(obj, /foo/, ''), expected);
	t.end();
});

test('function', t => {
	const obj = {
		fooBar: 'hello',
		fooYo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	const expected = {
		FOOBar: 'hello',
		FOOYo: 'hi',
		yoBar: 'hey',
		barYo: 'no'
	};

	t.same(fn(obj, 'foo', str => {
		return str.toUpperCase();
	}), expected);

	t.end();
});
