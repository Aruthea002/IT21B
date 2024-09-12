class Flower {
    constructor(name, color, bloomSeason, symbol) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.symbol = symbol;
    }

    Blooms() {
        console.log(`The ${this.name} blooms in ${this.bloomSeason}.`);
    }

    fragrance() {
        if (this.symbol) {
            console.log(`The ${this.name} is a symbol of death and loss.`);
        } 
    }

    colour1() {
        console.log(`The ${this.name} has a beautiful ${this.color} color.`);
    }
}


let spiderlilly = new Flower("RedSpider Lilly", "Bright Red", " late summer and early fall", true);


spiderlilly.Blooms();
spiderlilly.fragrance();
spiderlilly.colour1();