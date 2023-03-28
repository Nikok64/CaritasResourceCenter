

function resize() {
const blog = document.getElementById("blog");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  // Determine the device type based on screen width
  if (screenWidth >= 1024) {
    document.body.classList = ""
    toDelete = document.getElementById("genTable")
    blog.removeChild(toDelete)
    document.body.classList = ""
    document.body.classList.add("desktop");
    makeTable(4, images, buttons,test)
  } else if (screenWidth >= 768) {
    document.body.classList = ""
    toDelete = document.getElementById("genTable")
    blog.removeChild(toDelete)
    document.body.classList = ""
    document.body.classList.add("tablet");
    makeTable(3, images, buttons,test)
  } else {

    document.body.classList = ""
    toDelete = document.getElementById("genTable")
    blog.removeChild(toDelete)
    document.body.classList.add("phone");
    makeTable(1, images, buttons,test)
  }
}
