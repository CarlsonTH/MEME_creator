function validateImage() {
  var imageUrl = document.getElementById("imageUrl").value;
  var memePreview = document.getElementById("memePreview");

  memePreview.style.backgroundImage = "url('" + imageUrl + "')";
}

function validateTopText() {
  var topText = document.getElementById("topText").value;
  var memePreview = document.getElementById("memePreview");
  var displayText = document.createElement("div");
  displayText.textContent = topText;
  displayText.style.position = "absolute";
  displayText.style.top = "10%";
  displayText.style.left = "50%";
  displayText.style.transform = "translateX(-50%)";
  displayText.style.color = "#ffffff"; /* Blanc */
  displayText.style.fontSize = "16px";
  displayText.style.fontFamily = "Arial, sans-serif";
  displayText.id = "displayText";

  memePreview.innerHTML = "";
  memePreview.appendChild(displayText);
}

function validateText() {
  var topText = document.getElementById("topText").value;
  var fontFamily = document.getElementById("fontFamily").value;
  var fontSize = document.getElementById("fontSize").value;
  var textColor = document.getElementById("textColor").value;

  var memePreview = document.getElementById("memePreview");
  var displayText = document.createElement("div");
  displayText.textContent = topText;
  displayText.style.position = "absolute";
  displayText.style.top = "10%";
  displayText.style.left = "50%";
  displayText.style.transform = "translateX(-50%)";
  displayText.style.color = textColor;
  displayText.style.fontSize = fontSize;
  displayText.style.fontFamily = fontFamily;
  displayText.id = "displayText";

  memePreview.innerHTML = "";
  memePreview.appendChild(displayText);
}

var isResizing = false;
var startX, startY, startWidth, startHeight;

function startResizing(e) {
  e.preventDefault();
  isResizing = true;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = parseInt(
    document.defaultView.getComputedStyle(
      document.getElementById("resizableContainer")
    ).width,
    10
  );
  startHeight = parseInt(
    document.defaultView.getComputedStyle(
      document.getElementById("resizableContainer")
    ).height,
    10
  );
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);

    document.getElementById("resizeHandle").style.cursor = "nwse-resize";
  });

  document.getElementById("resizeHandle").style.cursor = "nwse-resize";
}

function handleMouseMove(e) {
  if (isResizing) {
    var newWidth = startWidth + (e.clientX - startX);
    var newHeight = startHeight + (e.clientY - startY);

    newWidth = Math.max(newWidth, 100);
    newHeight = Math.max(newHeight, 100);

    document.getElementById("resizableContainer").style.width = newWidth + "px";
    document.getElementById("resizableContainer").style.height =
      newHeight + "px";
  }
}
