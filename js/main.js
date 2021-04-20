const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through the empties and class drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart(){
    // grab fill element and add a hold class to it
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
    
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';

}

function dragLeave(){
    this.className = 'empty';

}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}