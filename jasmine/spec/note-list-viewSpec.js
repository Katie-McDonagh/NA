describe("NoteListView", function () {
  it("stores a note list upon instantiation", function () {
    var list1 = new NoteList();
    var view1 = new NoteListView(list1);
    expect(view1.noteList).toEqual(list1);
  });

  it("generates a string of HTML", function () {
    var list1 = new NoteList();
    list1.createNote("first note");
    list1.createNote("second note");
    var view1 = new NoteListView(list1);
    expect(view1.generateHTML()).toEqual(
      "<ul><li><div>first note</div></li><li><div>second note</div></li></ul>"
    );
  });
});
