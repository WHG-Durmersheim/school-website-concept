// Declare variables
const query = getUrlParameter('q');
const filter = query.toUpperCase();
const listItems = document.querySelectorAll('#posts > div > h1');

// Set results-for
document.getElementById('results-for').innerHTML = query;

// Loop through all list items, and hide those who don't match the search query
for (var i = 0; i < listItems.length; i++) {
  if (listItems[i].innerHTML.toUpperCase().indexOf(filter) < 0) {
    listItems[i].style.display = 'none';
  }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
