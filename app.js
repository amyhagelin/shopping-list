console.log("hi goobie");

// Single state object
var state = {
    items: []
};

//Features required ie Render Functions
//Add button - add new item to the list (function)
function addItem(input) {
	state.items.push(input);
	console.log(input);
	console.log(state.items);
}

function renderItems(array) {
	$("#shopping-list").empty();
	state.items.forEach(function(item) {
	 var itemHtml = '<li>' +
        '<span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>';
      console.log(itemHtml);
      $("#shopping-list").prepend(itemHtml);
	});
}

//Check button - apply .shopping-item__checked (uncheck)
function checkItem(item) {
(item).toggleClass("shopping-item__checked"); // did I do this correctly?
}

//Delete button - remove the item from the list
function deleteItem(text) {
	console.log("i'm being called");
	var index = state.items.indexOf(text);
	console.log(state.items);
	state.items.splice(index, 1);
	console.log(state.items);
}

// Event listener for adding items
$("#js-shopping-list-form").submit(function (event) {
	event.preventDefault();
	var listItem = $("#shopping-list-entry").val();
	console.log(listItem);
	addItem(listItem);
	renderItems(state.items);
});

// Tried this version first, but couldn't get it to work with new items
// $("button.shopping-item-delete").click( function (event) {
// 	console.log('delete btn clicked');
// 	event.preventDefault();
// 	console.log("I was clicked");
// 	var text = $(event.currentTarget).parent().siblings(".shopping-item").text();
// 	deleteItem(text);
// 	renderItems(state.items);
// })

// Event listener for the delete button
// this responds, but not sure why the other way wasnt working
// found here http://stackoverflow.com/questions/18602331/why-is-this-jquery-click-function-not-working
 $(document).on('click', 'button.shopping-item-delete', function(event) { 
 	console.log('delete btn clicked');
	event.preventDefault();
	console.log("I was clicked");
	var text = $(event.currentTarget).parent().siblings(".shopping-item").text();
	deleteItem(text);
	renderItems(state.items);
  });

 // Event listener for Check button
  $(document).on('click', 'button.shopping-item-toggle', function(event) { 
	event.preventDefault();
	console.log("I was clicked");
	var checkMe = $(event.currentTarget).parent().siblings(".shopping-item");
	checkItem(checkMe);
  });

// Render functions
/*
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};

// Event listeners
$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});
*/