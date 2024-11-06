JAVASCRIPT :-
- javascript used for building logics of a web page.
- javascript is a high lebel programming language ,used in both client side as well as server side.
- javascript comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e ES6(echma script 6)
- In another way we called ES6 as the vanila Javascript.
- Node JS is the run time environment of javascript.

Varible :-
- variable is a container to store some data.
- in javascript there are 3 types of variable are there...
1.var
- var is a type of variable which is used for changing the variable in later stage.
- var is used in oldest browser so now a days we are donot use var most of the cases.
2.const
- const means constant.
3.let
- let is a type of variable which is also used for changing  the variable in later stage.
- Now these days,most of the constant we used let for changing the variable .
- let is a block scope code so we have been used let in most cases.

Rules for creating variable name:-
- variables names are case sensitive "a" & "A" is diferent.
- only letter,digits,underscore & special character is allowed.(do not keep white space over here).
- only letter,digits,underscore & special character should be the 1st character only.
- reserved words can not be a variable name.
ex. for,while,var,let,this,boolean etc....

Datatype in javascript :-
- datatypes is an attributes associated with a piece of data that tells a computer system how to interprit its value.
- in datatypes we use "typeof" operator to know what type of data it is.
- mainly in javascript there are 2types of datatypes are there.
1.primitive Datatype :-
- in javascript there are 7 types of primitive dataypes are there like....

1.Number-number are the type of datatypes those it contains some numerical values
2.Boolean-in boolean datatype we ggot boolean value like true/false.
3.Null-in this datatype we got null for the value means nothing.
4.bigInt-in bigint we will get the integer value(-999999999 to +999999999)on the above.
5.String-string is a type of datatype that can hold some characterlike names or words etc..
6.Undefined- data is not define.
7.Symbol- in symbol we got one symbol of more than one value.

8.Reference Datatype-
- reference datatypes are the type of datatype which can hold multiple element in a single frame.
- reference datatypes are-> array,object,function

1.Array:- 
- array is a collection of similar type of datatype which can hold contigious memory location.
- array indexing start from"0".
- ex.let arr=["moon","rubi"]
                0      1

2. Object :-
- object is a reference type of datatype where we can store more than one element is a single frame.
- mainly object are working on(key:value) pair.

ex:-
let moon={
    "name:"moon mishra",
    "phone no":97645267,
    "address":"bbsr",
    "carrier":"good"
}
- in the above ex left side element are the keys and right side element are the values of that key.

3. function :-
- in function ,we repeatedly do the task in a function.
- function reduce our codee complexity and time and space complexity.
- syntax :
function my_schedule(){
    console.log("we wake up at 6 am");
    console.log("we go for a morning walk")
}
function calling ->

my_schedule();

Operator in js :-
- operator are the key features to do some opeats some task.
ex. A+B
- in the above example A & B are the operands, "+" is our operator.
- in javascript,theree are 5 types of operator are there....

1.Arithmetic operator -> (+,-,*,/),%(modulus),**(exponent)
2.comparision operator -> (==,!==,===)
3.Assignment operator -> (=,+=,*=,/=,%=,**=)
4.Logical operator -> (Logical AND)
5.unary operator -> increament(++),decreament(--)

logical AND (&&)
 A  B  AND(&&)
 T  T    T
 T  F    F
 F  T    F
 F  F    F

 Logical OR (||)

 A  B   OR(||)
 T  T    T
 T  F    T
 F  T    T
 F  F    F 



 conditional statement :-

 - to implement some condition in the code.
 - there are 3 types of conditional statements are there 

 1.if condition : 
 - if condition is true then statement is true.
 - syntax:
 if(condition){
    statement
 }
 2.if-else condition :
 - if condition is true then statement is true otherwise statement is false.
 - syntax :
 if(condition){
    statement
 }else {
    statement
 }

 3.if-elif condition or switch condition
 - its check the condition multiple times,where the condition is true,it returns the stattement.
 - if else if case,else condition if the default condition so if the condition doesnot satisfy any of the case then he print the default condition.
 - syntax :
 if(condition){
    statement
 }else if(condition){
    statement
 }else if(condition){
    stemenent
 }else{
    statement
 }

 pratice task:-
 write a code which can give grades student according to their score.
 1.80-100(A)
 2.70-79(B)
 3.60-69(C)
 4.50-59(D)
 5.0-49(fail-go for aganwadi)

 Loops in javascript:-
 - loop are used to execute a piece of code again & again.
 - there are 5 types of loop are there..
 1. For loop :-
 - syntax :
 for(initialization; condition; updation){
   statement
 }
 ex. we want to print "web Bocket" 5 times,
 for(let i=1;i<=5;i++){
   console.log("web Bocket")
 }
 working:-
 i=1 ->web bocket
 i=2 ->web bocket
 i=3 ->web bocket
 i=4 ->web bocket
 i=5 ->web bocket

 2. while loop:-
 - syntax:
 while(condition){
   statement;
   update;
 }
 ex- print "Gift" 5 times...in while loop

 let i=1
 while(i<=5){
   console.log("Gift");
   i++;
 }
 3. Do-while loop:-
 - syntax :
 initialize;
 do {
   statement;
   updation;
 } while(condition)

 4. For-of loop:- it iterates on string & Array


 5. For-In loop:- it iterate on objects
 ex. 
 leti=moon
 



 










