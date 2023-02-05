//ex3
//union type:
var getValueType = function (arg) {
	return { value: arg, type: typeof arg };
};
var Rectangle = /** @class */ (function () {
	function Rectangle(length, width) {
		this.length = length;
		this.width = width;
		this.length = length;
		this.width = width;
	}
	Rectangle.prototype.getArea = function () {
		return this.length * this.width;
	};
	Rectangle.prototype.getPerimeter = function () {
		return 2 * (this.length + this.width);
	};
	return Rectangle;
})();
var distance = function (first, second) {
	var dx = second.x - first.x;
	var dy = second.y - first.y;
	return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};
//enum
//4
var CardRank;
(function (CardRank) {
	CardRank[(CardRank['Ace'] = 0)] = 'Ace';
	CardRank[(CardRank['Two'] = 1)] = 'Two';
	CardRank[(CardRank['Three'] = 2)] = 'Three';
	CardRank[(CardRank['Four'] = 3)] = 'Four';
	CardRank[(CardRank['Five'] = 4)] = 'Five';
	CardRank[(CardRank['Six'] = 5)] = 'Six';
	CardRank[(CardRank['Seven'] = 6)] = 'Seven';
	CardRank[(CardRank['Eight'] = 7)] = 'Eight';
	CardRank[(CardRank['Nine'] = 8)] = 'Nine';
	CardRank[(CardRank['Ten'] = 9)] = 'Ten';
	CardRank[(CardRank['Jack'] = 10)] = 'Jack';
	CardRank[(CardRank['Queen'] = 11)] = 'Queen';
	CardRank[(CardRank['King'] = 12)] = 'King';
})(CardRank || (CardRank = {}));
var higherRankedCard = function (card1, card2) {
	if (card1.rank > card2.rank) {
		return card1;
	} else {
		return card2;
	}
};
var card1 = { suit: 'Spades', rank: CardRank.Queen };
var card2 = { suit: 'Hearts', rank: CardRank.King };
var higherRanked = higherRankedCard(card1, card2);
console.log(higherRanked);
//5
var Person = /** @class */ (function () {
	function Person(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
	}
	return Person;
})();
var person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);
var area = function (shape) {
	if ('width' in shape) {
		return shape.width * shape.height;
	} else {
		return Math.PI * Math.pow(shape.radius, 2);
	}
};
var myShape = { width: 2, height: 4, radius: 1 };
console.log(area(myShape)); // 15.141592653589793
//7
function swap(arg, num) {
	return [num, arg];
}
console.log(swap('hello', 'world')); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]
function minMax(arr) {
	return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}
console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(['apple', 'banana', 'cherry'])); // ["apple", "cherry"]
