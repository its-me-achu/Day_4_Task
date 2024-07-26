//Convert all  the strings to title caps in a string array:
//A) Anonymous Function

const stringArray = ["apple", "orange", "banana", "papaya"];
const titleCapsArray =
stringArray.map(function(str){

    return str.charAt(0).toLocaleUpperCase()+
    str.slice (1).toLocaleLowerCase();

});
 console.log(titleCapsArray);

//B)Arror Function:

const strings = ["apple", "orange", "banana", "papaya"];
const titleCaps =strings.map(str => 
    str.charAt(0).toLocaleUpperCase()+
    str.slice (1)
 );
 console.log(titleCaps);
