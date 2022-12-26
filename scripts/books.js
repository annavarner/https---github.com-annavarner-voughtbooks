const requestURL = './json/bookdata.json';
const cards = document.querySelector('.cards');


fetch(requestURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const books = jsonObject['books'];
    books.forEach(displayBooks);
  });



  function displayBooks(book) {

    let card = document.createElement('section');
    let url = document.createElement('a');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let infodiv = document.createElement('div')
    let date = document.createElement('p');


  
    card.setAttribute('class', 'bookCard');
    url.setAttribute('href', book.url);
    url.setAttribute('target', '_blank')
    h2.textContent = `${book.name}`;
    infodiv.setAttribute('class', 'infodiv')
    date.innerHTML = `<strong>Date Published: </strong> ${book.date}`;

    card.appendChild(url);
    url.appendChild(h2);

  

    image.setAttribute('src', book.img);
    image.setAttribute('alt', `Book Cover for ${book.name}`);
    image.setAttribute('loading', 'lazy');
  

    url.appendChild(image);
    card.appendChild(infodiv);
    infodiv.appendChild(date);


  
    document.querySelector('div.cards').appendChild(card);
  }