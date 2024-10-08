const button = document.getElementById("hoverButton");

// Function to move the button when the mouse is near
button.addEventListener("mouseover", function (event) {
  // Get the window width and height
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random new positions within the window (away from edges)
  const newLeft = Math.random() * (windowWidth - button.clientWidth);
  const newTop = Math.random() * (windowHeight - button.clientHeight);

  // Set the new position for the button
  button.style.left = newLeft + "px";
  button.style.top = newTop + "px";
});