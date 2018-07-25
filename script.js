var boxes = document.querySelectorAll('td');
var color = document.querySelector('#colorPicker')
var clear = document.querySelector('button')

for(let i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('click', function(e){
    boxes[i].style.backgroundColor = color.value;
  })
  clear.addEventListener('click', function(){
    boxes[i].style.backgroundColor = 'white'
  })
}
