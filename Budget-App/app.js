//Budget Controller

let budgetController = (function(){

   

}) ();

//UI Controller

let UIController =(function(){
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description' ,
        inputValue: '.add__value' , 
        inputBtn : '.add__btn'
    }

    return{
        getInput: function(){
           return {
                 type : document.querySelector ( DOMstrings.inputType ).value,
                describtion :  document.querySelector ( DOMstrings.inputDescription ) .value,
                   value :  document.querySelector( DOMstrings.inputValue ).value
           };

            }, 
                     getDOMstrings: function() {
                         return DOMstrings;
                     }

        }
    


}) ();


//Global App Controller

let controller = (function(budgetCtrl,UICtrl){


    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();
   
        document.querySelector(DOM.inputBtn).addEventListener('click', cntrlAddItems);

        // Add Keypress Event
    
        document.addEventListener('keypress',function(event){
    
            if(event.keyCode === 13){
            cntrlAddItems();
        }
    });
        
    }

    

    let cntrlAddItems = ()=> {
 
        var input = UICtrl.getInput();
            console.log(input);
        
    };

return{ 
    init: function () {
        //console.log(' Hey Dude, its working');
        setupEventListeners();
        
    }

};



}) (budgetController,UIController);



controller.init();
