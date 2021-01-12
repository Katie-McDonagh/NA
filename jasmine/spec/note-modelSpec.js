describe("Note", function() {
  it ("can be instanciated", function(){
    var note1 = new Note

    expect(note1).toBeInstanceOf(Note);
  });

  it ("stores a note upon instanciation", function(){
    var note1 = new Note("I'm a note")

    expect(note1.text).toEqual("I'm a note");
  });

  it ("Returns a note", function(){
    var note1 = new Note("I'm a note")

    expect(note1.displayNote()).toEqual("I'm a note");
  });

});