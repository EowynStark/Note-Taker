document.addEventListener('DOMContentLoaded', () => {
    const saveNoteButton = document.querySelector('.save-note');
    const newNoteButton = document.querySelector('.new-note');
    const clearButton = document.querySelector('.clear-btn');
    const noteTitleInput = document.querySelector('.note-title');
    const noteTextarea = document.querySelector('.note-textarea');
    const listGroup = document.getElementById('list-group');

    saveNoteButton.addEventListener('click', saveNote);
    newNoteButton.addEventListener('click', newNote);
    clearButton.addEventListener('click', clearForm);

    fetchAndDisplayNotes();
})

// fetching existing notess and updating the UI
function fetchAndDisplayNotes() {
    fetch('/api/notes').then((response) => {
        if (!response.ok) {
            throw new Error('Failed to retrieve notes');
        }
        return response.json();
    })
    .then((notes) => {
        updateNoteList(notes);
    })
    .catch((error) => {
        console.error(error);
    });
}

// updates note list
function updateNoteList(notes) {
    listGroup.innerHTML = '';
    notes.forEach((note) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerText = note.title;
        listItem.addEventListener('click', () => displayNoteDetails(note));
        listGroup.appendChild(listItem);
    });
}

// save note function


// new note function


// display note details function 


// clearing form function