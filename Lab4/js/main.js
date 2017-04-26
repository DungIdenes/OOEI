'use strict';

var filePath = './xml/catalog.xml';
var XHRequest = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;
var xhr = new XHRequest();

xhr.open('GET', filePath, true);

xhr.onload = function() {
    var responseDoc = this.responseXML;
    var rootElem = document.getElementById('root');
    var bookArr = responseDoc.getElementsByTagName('book');
    for (var i = 0; i < bookArr.length; i++) {
        var bookContainer = document.createElement('div');
        bookContainer.classList.add('book');

        var bookTitle = document.createElement('h3');
        bookTitle.classList.add('book__title');
        var title = bookArr[i].getElementsByTagName('title')[0].innerHTML;
        bookTitle.innerHTML = title;

        var bookDate = document.createElement('p');
        bookDate.classList.add('book__date');
        var date = bookArr[i].getElementsByTagName('date')[0].innerHTML;
        bookDate.innerHTML = date;

        var bookSeries = document.createElement('p');
        bookSeries.classList.add('book__series');
        var series = bookArr[i].getElementsByTagName('series')[0].innerHTML;
        bookSeries.innerHTML = series;

        var bookDesription = document.createElement('p');
        bookDesription.classList.add('book__desription');
        var desription = bookArr[i].getElementsByTagName('series')[0].innerHTML
        bookDesription.innerHTML = desription;

        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookDate);
        bookContainer.appendChild(bookSeries);
        bookContainer.appendChild(bookDesription);

    }

};


xhr.onerror = function() {
    console.log('Error! ' + this.status + ':' + this.statusText);
};

xhr.send();
