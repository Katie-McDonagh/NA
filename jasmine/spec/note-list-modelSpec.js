describe("NoteList", function () {
  it("Stores an array of note models", function () {
    var noteList1 = new NoteList();
    expect(noteList1.notesArray).toEqual([]);
  });

  it("returns a list of stored notes", function () {
    var noteList1 = new NoteList();
    expect(noteList1.displayNotesList()).toEqual([]);
  });

  it("it creates and stores a note with a given text property", function () {
    var noteList1 = new NoteList();
    noteList1.createNote("My first note!");
    expect(noteList1.notesArray[0].displayNote()).toEqual("My first note!");
  });
});
