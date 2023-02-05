//ex3
//union type:

const getValueType = (arg: string | number | boolean): object => {
	return { value: arg, type: typeof arg };
};

//interface:
//2
interface Rectangle {
	length: number;
	width: number;
}
class Rectangle implements Rectangle {
	constructor(public length: number, public width: number) {
		this.length = length;
		this.width = width;
	}
	getArea() {
		return this.length * this.width;
	}
	getPerimeter() {
		return 2 * (this.length + this.width);
	}
}

//3
interface INumber {
	x: number;
	y: number;
}

const distance = (first: INumber, second: INumber): number => {
	let dx = second.x - first.x;
	let dy = second.y - first.y;
	return Math.sqrt(dx ** 2 + dy ** 2);
};

//enum
//4
enum CardRank {
	Ace,
	Two,
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	Ten,
	Jack,
	Queen,
	King,
}

interface Card {
	suit: string;
	rank: CardRank;
}
const higherRankedCard = (card1: Card, card2: Card) => {
	if (card1.rank > card2.rank) {
		return card1;
	} else {
		return card2;
	}
};
const card1: Card = { suit: 'Spades', rank: CardRank.Queen };
const card2: Card = { suit: 'Hearts', rank: CardRank.King };
const higherRanked = higherRankedCard(card1, card2);
console.log(higherRanked);

//5

class Person {
	public name: string;
	public age: number;
	public email: string;
	constructor(name: string, age: number, email: string) {
		this.name = name;
		this.age = age;
		this.email = email;
	}
}
const person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);
// Output:
// { name: 'John Doe', age: 30, email: 'john.doe@example.com' }

//6
interface Rectangle {
	width: number;
	height: number;
}
interface Circle {
	radius: number;
}
type shape = Rectangle & Circle;
const area = (shape: shape) => {
	if ('width' in shape) {
		return shape.width * shape.height;
	} else {
		return Math.PI * shape.radius ** 2;
	}
};
const myShape: Shape = { width: 2, height: 4, radius: 1 };
console.log(area(myShape)); // 15.141592653589793

//7
function swap<Type>(arg: Type, num: Type) {
	return [num, arg];
}
console.log(swap('hello', 'world')); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]

function minMax<T>(arr: T[]): [T, T] {
	return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(['apple', 'banana', 'cherry'])); // ["apple", "cherry"]
