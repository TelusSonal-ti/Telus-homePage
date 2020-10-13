const container = document.querySelector('.container');
var input = document.querySelector('.input');
const add = document.querySelector('.addButton');

class item{
	constructor(name){
		this.createItem(name);
    }
    
    createItem(name){
        
        let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');


    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	

    	var editButton = document.createElement('button');
    	editButton.classList.add('editButton');
    	editButton.innerHTML = "EDIT";
    	

    	var removeButton = document.createElement('button');
    	removeButton.classList.add('removeButton');
    	removeButton.innerHTML = "REMOVE";
    	

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.editButton(input));
        removeButton.addEventListener('click',() => this.removeButton(itemBox));
 }
    editButton(input){
       input.disabled = !input.disabled;
        }
        
    removeButton(itemBox){
            container.removeChild(itemBox);
        }
}
add.addEventListener('click', check);
function check(){
	if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
    else{
        alert(" Please enter a task.....");
    }

}

