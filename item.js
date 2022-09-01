class Item{  
    #name;
    #id;
    #category;
    #price;
    #amount;
    
    constructor (name , id, category, price, amount){
    this.#name = name;
    this.#id = id;
    this.#category = category;
    this.#price = price;
    this.#amount = amount;  
    } 


     properties(){ return `name: ${this.#name}, id: ${this.#id}, category: ${ this.#category}, 
     price: ${this.#price}, amount: ${this.#amount}`};

// getters ans setters
   set name(name) {this.#name = name};                   get name(){return this.#name};
   set id(id) {this.#id = id};                           get id() {return this.#id}
   set category(category) {this.#category = category};   get category(){ return this.#category}
   set price(price) {this.#price = price};               get price() {return this.#price}
   set amount(amount) { this.#amount = amount};          get amount() {return this.#amount}
   


}

window.item = new Item()
