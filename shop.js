class Shop{

    #items
    #categories
    #index = 11
    
    constructor(){
        this.#items = [
            new Item("miky" , 1, "active mickey" , 452,  1), 
            new Item("miky" , 2, "rests mickey" , 452,  2),
            new Item("miky" , 3, "black and white" , 452, 3),
            new Item("miky" , 4, "rests mickey" , 452,  3),
            new Item("miky" , 5, "black and white" , 452,  3),
            new Item("miky" , 6, "active mickey" , 452,  3),
            new Item("miky" , 7, "black and white" , 452,  3),
            new Item("miky" , 8, "black and white" , 452,  3),
            new Item("miky" , 9, "active mickey" , 452,  1),
            new Item("miky" , 10, "rests mickey" , 452,  1),
    ]

    this.#categories = [ "black and white" , "rests mickey" , "active mickey"]
    }
    
    getItemFromHTMLForm(formName){
        const form  = document.getElementById(formName);
        let name =  form.elements['name'].value
        let price = form.elements['price'].value
        let amount = form.elements['amount'].value
        let category = form.elements['category'].value
        let item = new Item(name, this.#index, category ,price ,amount )
        console.log(item.properties());   
        return item; 
    }

    addItem(event){ 
    event.preventDefault()
    this.#items.push(this.getItemFromHTMLForm("addItem"));
    this.#index++
    refreshShowItemsComponnent()
    managerComponnent()
    }
  
    editItem(event , id){
     event.preventDefault()
     let x = this.#items.find(x => x.id == id)
     item = this.getItemFromHTMLForm("editItemForm")
     x.name = item.name
     x.price = item.price
     x.amount = item.amount
     x.category = item.category
     refreshShowItemsComponnent()
     managerComponnent()
    }

    removeItem(event, id){
    event.preventDefault()
    this.#items.splice(this.#items.findIndex(x =>{ return x.id == id}), 1)
    refreshShowItemsComponnent()
    }

    get index(){return this.#index}
    get categories(){return this.#categories}
    get items(){return this.#items}


}

const shop = new Shop()
const item = new Item()


