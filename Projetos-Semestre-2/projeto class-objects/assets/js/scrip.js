class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base= base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDec() {
        return `Uma deliciosa pizza ${this.base}, com molho de ${this.sauce}, 
        com cobertura de ${this.toppings} e queijo ${this.cheese}`
    }
    getPriceBase() {
        if (this.base == 'tradicional') {
            return 5;
        } else if (this.base == 'integral') {
            return 7;
        } else {
            return `Não trabalhamos com essa base : ${this.base}`;
        }
    }
    getPriceSauce() {
        if (this.sauce == 'tomate') {
            return 5;
        } else if (this.sauce == 'pezzo') {
            return 7;
        } else {
            return `Não trabalhamos com essa sauce : ${this.sauce}`;
        }
    }
    getPriceToppings() {
        if (this.toppings == 'catupiry') {
            return 5;
        } else if (this.toppings == 'cremex') {
            return 7;
        } else {
            return `Não trabalhamos com essa Toppings : ${this.toppings}`;
        }
    }
    getPriceCheese() {
        if (this.cheese == 'cheedar') {
            return 5;
        } else if (this.cheese == 'mozzarella') {
            return 7;
        } else {
            return `Não trabalhamos com essa cheese : ${this.cheese}`;
        }
    }
    getTotalPrice() {
        return this.getPriceBase() + this.getPriceSauce() + this.getPriceCheese() + this.getPriceToppings();
    }
}

const pizza1 = new Pizza('tradicional', 'tomate', 'catupiry', 'cheedar');
//const pizza2 = new Pizza('integral', 'pezzo', 'cremex', 'mozzarella');
console.log(pizza1.getTotalPrice());
console.log(pizza1.getDec());
//console.log(pizza2.getTotalPrice());
