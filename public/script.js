/* eslint-disable no-undef */
/* eslint-disable max-len */
const input = document.getElementById('search__word');
const submitBtn = document.getElementById('search_form');
const wordsResult = document.getElementById('search_result');
const wordList = document.getElementById('word_list');
const apiUrl = '/search';
let url;

const filterByName = (arr, val) => arr.filter((x) => x.toLowerCase().indexOf(val.toLowerCase()) === 0);

if (typeof module !== 'undefined') { module.exports = filterByName; }



const enteredWord = (e) => {
  apiFunction(apiUrl, (res) => {
    wordList.textContent = '';
    let filterWord = filterByName(res.words, e.target.value);
    if (input.value === '') filterWord = [];
    const newFilteredWords = filterWord.slice(0, 10);
    newFilteredWords.forEach((element) => {
      const option = document.createElement('div');
      option.setAttribute('class', 'option');
      option.textContent = element;
      wordList.appendChild(option);
      option.addEventListener('click', (event) => {
        input.value = event.target.textContent;
        while (wordList.firstChild) wordList.removeChild(wordList.firstChild);
        url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
      });
    });
  });
};

const words = () => {
  wordsResult.textContent = '';
  apiFunction(url, (res) => {
    const result = {
      word: res[0].word,
      phonetic: res[0].phonetics[0].text,
      'word Meaning': res[0].meanings[0].definitions[0].definition,
    };

    for (let i = 0; i < 3;) {
      const Container = document.createElement('div');
      Container.textContent = `${Object.keys(result)[i]} : ${
        Object.values(result)[i]
      }`;
      Container.setAttribute('class', 'word-result');
      wordsResult.appendChild(Container);
      i += 1;
    }
  });
};

input.addEventListener('input', (e) => {
  enteredWord(e);
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  words(e);
});
