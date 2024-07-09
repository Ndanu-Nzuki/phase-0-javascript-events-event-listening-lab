const clicker = document.getElementById('button');

function addingEventListener() {
    clicker.addEventListener('click', function() {
        alert('Button clicked');
    });
}
addingEventListener();