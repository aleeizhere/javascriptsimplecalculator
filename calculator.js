//This is how we pull out the html elements
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

/*the problem is that there are multiple elements with class button, so now when we will
select elements with classname button all of them will be selected separately as HTML Collection
so we will have to apply our functions on them separately, rather what we will do is make an array out of these
elements and apply map function on each of the elements of an array which is possible*/

/*
now we will apply the function to the elements of the array,
that function would have an event listener
*/
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText = "Error";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
} );