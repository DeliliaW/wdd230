const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function ()  {'submit'});

if (input.value != '') (' => ');

const li  = document.createElement('li');
const deleteButton = document.createDocumentFragment('button');
const li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
deleteButton.addEventListener('click', function () {
list.removeChild(li);
input.focus ();
});
input.focus ();
input.value = '';
