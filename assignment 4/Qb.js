function createDiv(width, height, text) {
    // Get the container div
    let container = document.getElementById("container");

    // Create a new div element
    let newDiv = document.createElement("div");

    // Set width and height with "px" units
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";

    // Add text content
    newDiv.textContent = text;

    // Add some styles for visibility (optional)
    newDiv.style.border = "1px solid black";
    newDiv.style.margin = "10px";
    newDiv.style.textAlign = "center";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "center";

    // Append the new div to the container
    container.appendChild(newDiv);
}

// Example Usage
createDiv(200, 100, "Hello, I am a new div!");
createDiv(150, 150, "Another div here!");
