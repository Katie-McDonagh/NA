describe("NoteListView", function() {
  it ("stores a note list upon instanciation", function() {
    var list1 = new NoteList()
    var view1 = new NoteListView(list1)
    expect(view1.noteList).toEqual(list1)
  })
})