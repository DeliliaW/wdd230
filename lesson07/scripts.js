const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList()  || [];
chaptersArray.forEach (chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    const chapterValue = input.value.trim();   
    if (input.value != '') { 
        displayList(chapterValue);
        chaptersArray.push(chapterValue);
        setChapterList ();
       input.value = '';
       input.focus();
    }  else {
      alert('Enter a chapter!')
    }
});    
function displayList(item)  {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus ();
    });
} 

console.log('deletedChapter')

function setChapterList()  {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
} 

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList')); 
}

function deleteChapter(chapter)  {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}  
  

    
   
    
        


