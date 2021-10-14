const screen = document.querySelector('#screen');
const screenText = document.createElement('h1');
const array = ['+','-','*','/'];
const buttons = document.querySelectorAll('button');
let x = false;
let y = false;
let operator = '';
let operator2 = '';
let screen_variable = '';
let result = 1;
let zz = '';
let z = false;
let n1=1;
let n2=1;

read(n1);
function reset_screen(){
    screen_variable = '';
    SendToScreen();
}
function read(){
    buttons.forEach(button=> button.addEventListener('click', ()=> {
        let button_value = button.textContent;
        if(button_value==='C'){
            reset_screen();
        }
        if(x === false && y === false){
            if(isNaN(button_value)){
                
                if(array.includes(button_value)){
                    n1 = Number(screen_variable);
                    switch(button_value){
                        case '+':
                            operator='+';
                            break;
                        case '-':
                            operator='-';
                            break;
                        case '*':
                            operator='*';
                            break;
                        case '/':
                            operator='/';
                            break;
                    }
                    screen_variable = operator;
                    SendToScreen();
                    x=true;
                }   
                
            }
            else{
                
                screen_variable = screen_variable.concat('',button_value);
                SendToScreen();
            }
            
        }
    
        
        else if(x===true && y===false){
            if(isNaN(button_value)){

                    n2 = screen_variable;
                    n2n = Number(n2);
                    switch(button_value){
                        case '+':
                            operator2='+';
                            screen_variable =operator;
                            SendToScreen();
                            x=false;
                            return operate(n1,operator,n2n,operator2);
                        case '-':
                            operator2='-';
                            screen_variable =operator;
                            SendToScreen();
                            x=false;
                            return operate(n1,operator,n2n,operator2);
                        case '*':
                            operator2='*';
                            screen_variable =operator;
                            SendToScreen();
                            x=false;
                            return operate(n1,operator,n2n,operator2);
                        case '/':
                            operator2='/';
                            screen_variable =operator;
                            SendToScreen();
                            x=false;
                            return operate(n1,operator,n2n,operator2);
                        case '=':
                            screen_variable =operator;
                            SendToScreen();
                            x=false;
                            return operate(n1,operator,n2n,operator2);
                    }
        
                
            }
            else{
                if(z==false){
                    screen_variable = '';
                }
                console.log(z);
                screen_variable = screen_variable.concat('',button_value);
                SendToScreen();
                z = true;
            }
        }

        else if(x===false && y===false){

                
                screen_variable = screen_variable.concat('',button_value);
                SendToScreen();
                n2= screen_variable;
                operate(result,operator,n2,operator2);

        }
        
    
        }
        ));


}


function SendToScreen(){   
    screenText.textContent = screen_variable;
    screen.appendChild(screenText);
}

function operate(n1,operator,n2,operator2){
    console.log(n1," ", operator, ' ', n2n);
    switch(operator){
        
        case '+':
            z=false;
            result = n1+n2;
            screen_variable = result;
            SendToScreen();
            operator = operator2;
            return result;
        case '-':
            z=false;
            result = n1-n2;
            screen_variable = result;
            SendToScreen();
            operator = operator2;
            return result;
        case '*':
            z=false;
            result = n1*n2;
            screen_variable = result;
            SendToScreen();
            operator = operator2;
            return result;
        case '/':
            z=false;
            result =n1/n2;
            screen_variable = result;
            SendToScreen();
            operator = operator2;
            return result;
    }

    }
