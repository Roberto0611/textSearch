//Script by: Roberto Ochoa Cuevas :).
let word;

//get the text and text content
const textElement = document.getElementById('sText');
const text = document.getElementById('sText').textContent;

//Event listener for the button
const button = document.getElementById('search-btn');
button.addEventListener('click', () =>{
    //get the word
    word = document.getElementById('keyword-input').value

    //search for the matches
    const regEx = new RegExp(word, "ig");
    const matches = text.match(regEx);

    //Higligth the words
    if (matches) {
        const highlightedText = text.replace(regEx, (match) => `<span class="highlight">${match}</span>`);
        textElement.innerHTML = highlightedText;
        alert('We found ' + matches.length + ' occurrences.');
    } else {
        alert('No matches found.');
    }
})
//<33