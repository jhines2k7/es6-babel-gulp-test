import * as math from './lib/math';

var developer = 'James Hines';

console.log(`Yo! My name is ${developer}!`);

var author = {
    name: 'Gray Ghost Visuals'
};

console.log(`Thanks for writing awesome articles, ${author.name}.`);

var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log('Evens: ' + evens);

var odds = evens.map(v => v + 1);
console.log('Odds: ' + odds);

var nums = evens.map((v, i) => v + i);
console.log('Nums: ' + nums);

var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log('Pairs: ' + JSON.stringify(pairs));

class View {
    constructor(options) {
        this.model = options.model;
        this.template = options.template;
    }

    render() {
        return this.template;
    }
}

class Model {
    constructor(properties) {
        this.properties = properties;
    }

    toObject() {
        return this.properties;
    }
}

var james = new Model({
    name: 'James'
});

var view = new View({
    model: james,
    template: `Hello, ${james.toObject().name}`
});

console.log(view.render());

console.log('2pi = ' + math.sum(math.pi, math.pi));