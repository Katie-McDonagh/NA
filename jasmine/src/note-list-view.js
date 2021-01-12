class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  generateHTML() {
    var string = "";
    this.noteList.notesArray.forEach((note) => {
      string += `<li><div>${note.text}</div></li>`;
    });
    return `<ul>${string}</ul>`;
  }
}
