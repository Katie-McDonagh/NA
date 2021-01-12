class NoteController {
  constructor(noteListModel) {
    noteListModel.createNote("favourite drink: selzer");
    this.noteListView = new NoteListView(noteListModel);
    this.noteListModel = noteListModel;
  }
  work() {
    var elem = document.getElementById("app");
    elem.innerHTML = "howdy";
  }
}
