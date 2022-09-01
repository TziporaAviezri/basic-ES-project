//HTML כל הפונקציות שנוגעות במילוי / ריקון/ שינוי של ה :HTML  דוקומנטציה של ה

    function onLoadHTML(){
       loginComponnent()
       showComponnent()
    }
    function loginComponnent(){
        document.getElementById("login div").innerHTML = `<button id="loginButton" onclick="replaceManagerMode()" accesskey="s">
            ${localStorage.getItem("manager") === "manager" ? "exit manager mode" : "enter manager mode" }</button>`    
    }
    function managerComponnent(){
        managerDiv = document.getElementById("manager div")
        if (localStorage.getItem("manager") === "manager") {
            managerDiv.className= "inputs-group"
            managerDiv.innerHTML = `<button onclick="refreshAddItemComponnent()" 
                id="addItemButton">add Item</button>`}
        else {    
            managerDiv.className= ""   
            managerDiv.innerHTML = ""
        }
    }


    function showComponnent(){
        document.getElementById("items shop div").innerHTML = selectionComponnent()
        document.getElementById("items shop div").innerHTML += showItemsComponnent()
    }

   function refreshAddItemComponnent(){
    document.getElementById("manager div").innerHTML = addItemComponnent()
   }
   function refreshEditItemComponnent(id){
    document.getElementById("manager div").innerHTML = editItemComponnent(id)
   }
   function refreshShowItemsComponnent(){
    document.getElementById("show items div").innerHTML = showItemsComponnent()
   } 

   function addItemComponnent(){
    let newDive = `<div><form id="addItem" onsubmit="shop.addItem(event)">
    id: ${shop.index}
    <input type="text" id="name"  placeholder="input name" class="inputs"/>
    <input type="number" id="price"  placeholder="input price" class="inputs"/>
    <input type="number" id="amount" placeholder="input amount" class="inputs"/>
    <select  name="category" id="category" class="inputs"> `
    shop.categories.map( x => {
        newDive += `<option id="${x} option" value="${x}">${x}</option>`
        })
    newDive += `</select>
        <input type="submit" value="i finish" accesskey="q">
    </form>
    </div>`
    return newDive;
   }

   function editItemComponnent(id){
    let item = shop.items.find(x => x.id == id)

    let newDive = `<form id="editItemForm" onsubmit="shop.editItem(event, ${id})">
    id: ${item.id}
    <input type="text" id="name"  value="${item.name}" class="inputs"/>
    <input type="number" id="price"  value="${item.price}" class="inputs"/>
    <input type="number" id="amount" value="${item.amount}" class="inputs"/>
    <select  id="category" value="${item.category}" class="inputs" />
          <option id="${item.category}" value="${item.category}">${item.category}</option>`
    shop.categories.map( x => {
        x != item.category ? 
            newDive += `<option id="${x}" value="${x}">${x}</option>`
        :   newDive += ""
        })
    newDive += `</select>
        <input type="submit" value="i finish" accesskey="q">
    </form>`
    return newDive;
   }
   

    function selectionComponnent(){
        let newDiv = `<div id="selection div" class="selections">`
        shop.categories.map( x => {
            newDiv += `<div class="one-selection"> 
            ${x} <input type="checkbox" id="${x} chexbox" name="${x} chexbox" onclick="refreshShowItemsComponnent()" checked> 
            </div>`
        })
    return newDiv;
    }

    function showItemsComponnent(){
        newDiv= `<div id="show items div" class="items-show">`
        shop.items.map(item => {
            if (document.getElementById(item.category + " chexbox").checked){
                newDiv += cardItemComponnent(item)
            }
        })
        newDiv+=`</div>`
        return newDiv;
    }

    function cardItemComponnent(item){
    let newDiv = `
    <div class="card" id="card item ${item.id}">
        <img src="./image/mikies/${item.id}.png" width="100" />
        <p id="name"> ${item.name}</p>
        <p>${item.category}</p> 
        <p class="price">price: ${item.price}$</p> `
    item.amount == "1" ? newDiv+=`<p class="only-one-unit"> only one unit left in stock </p>` : newDiv += `<p class="units">${item.amount} units left in stock</p>` 
    localStorage.getItem("manager") === "manager" ?
    newDiv += `<p id="btn-area"><button class="l-btn" onclick="refreshEditItemComponnent(${item.id})">
                    <img class="icon" src="image/edit.png" />
               </button>
               <button class="r-btn" onclick="shop.removeItem(event ,${item.id})">
                    <img class="icon" src="image/delete.png" />
                </button> </p>`
      : newDiv += `<p id="btn-area">
                        <button class="l-btn" ">
                        <img class="user-icon" src="image/download.png" />
                        </button>
                        <button class="r-btn" ">
                             <img class="user-icon" src="image/heart.png" />
                        </button>
                    </p>`
    newDiv+=`
    </div>`
    return newDiv;
    }


