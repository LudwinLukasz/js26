function checkOnclickEvent(param) {
  console.log(param);
}

var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');
    add = document.getElementById("addElem");
    list = document.getElementById("list");

    imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked');
});

inputElem.addEventListener('keyup', function(e) {
  e.target.value += ' test ';
});

add.addEventListener('click', function() {
	var element = document.createElement('li');

	element.innerHTML = 'item ' + document.getElementsByTagName("li").length;
	list.appendChild(element);
});

