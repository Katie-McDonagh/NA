class NoteController {
  constructor(noteList) {
    noteList.createNote("Favourite drink: Selzer");
    this.noteListView = new NoteListView(noteList);
  }
}
