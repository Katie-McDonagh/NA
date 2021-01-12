class NoteList {
  constructor() {
    this.notesArray = [];
  }

  displayNotesList() {
    return this.notesArray;
  }

  createNote(string) {
    var note = new Note(string)
    this.notesArray.push(note);
  }
}
