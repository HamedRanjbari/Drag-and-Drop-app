let $ = document;
let emptyBox = $.querySelectorAll(".empty-box");
let fill = $.querySelector(".fill");

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (let empty of emptyBox) {
  empty.addEventListener("dragover", dragOver)
  empty.addEventListener("dragenter", dragEnter)
  empty.addEventListener("dragleave", dragLeave)
  empty.addEventListener("drop", drop)
}

function dragStart() {
  this.classList.add("hold")
  setTimeout(() => {
    this.classList = "invisible"
  }, 0);
}
function dragOver(e) {
  e.preventDefault()
}
function dragEnter(e) {
  e.preventDefault()
  this.classList.add("hover")
}
function dragLeave() {
  this.classList.remove("hover")
}
function drop() {
  this.classList.add("empty-box")
  this.append(fill)
  this.classList.remove("hover")
}
function dragEnd() {
  this.classList.add("fill")
}