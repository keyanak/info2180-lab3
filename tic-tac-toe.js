// Exercise 1 - Layout the board

document.addEventListener("DOMContentLoaded", () => {
    // Get all squares inside the board
    const squares = document.querySelectorAll("#board div");

    // Add the "square" class to each one
    squares.forEach(square => {
        square.classList.add("square");
    });
});
