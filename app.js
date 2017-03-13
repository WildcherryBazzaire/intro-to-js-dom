console.log("Sanity Check");

//console.log(document.getElementById('use-id-method'));

//finding html elements
var idElement = document.getElementById('use-id-method');
console.log(idElement);

var tagElement = document.getElementsByTagName('script');
console.log(tagElement);

var classElement = document.getElementsByClassName('use-class-method');
console.log(classElement[0]);
console.log(classElement[1]);

//changing html Elements

console.log('got the id value ' + idElement.innerHTML);
idElement.innerHTML = 'I have been changed';

console.log('got the Class Value ' + classElement[1].innerHTML);
classElement[1].innerHTML = 'I have been changed by and array target //2';