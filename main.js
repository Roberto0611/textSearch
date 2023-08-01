//Script by: Roberto Ochoa Cuevas :).

//get the text content
const text = document.getElementById('sText').textContent;

//search for the words
const test = text.match(/Lorem/ig)
console.log(test)
alert('we found' + ' ' + test.length + ' ' + 'elements')
