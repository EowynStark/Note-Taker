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