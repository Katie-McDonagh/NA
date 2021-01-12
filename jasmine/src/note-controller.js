class NoteController {
  constructor(noteListModel) {
    noteListModel.createNote("favourite drink: selzer");
    this.noteListView = new NoteListView(noteListModel);
    this.noteListModel = noteListModel;
  }

  changeHTML() {
    var toAdd = this.noteListView.generateHTML();
    var elem = document.getElementById("app");
    elem.innerHTML = toAdd;
  }
}
