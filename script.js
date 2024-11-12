console.log("Welcome to TimePulse");

function updateClock() {
    const now = new Date();
    const dname = now.getDay(),
          mo = now.getMonth(),
          dnum = now.getDate(),
          yr = now.getFullYear(),
          hour24 = now.getHours(),  // Use 24-hour format to calculate AM/PM
          hou = hour24 % 12 || 12, // Convert to 12-hour format
          min = String(now.getMinutes()).padStart(2, '0'),
          sec = String(now.getSeconds()).padStart(2, '0'),
          determine = hour24 >= 12 ? "PM" : "AM"; // Correct AM/PM logic

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Element IDs
    const ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    const values = [week[dname], months[mo], String(dnum).padStart(2, '0'), yr, String(hou).padStart(2, '0'), min, sec, determine];

    // Update all elements in the DOM
    ids.forEach((id, index) => {
        document.getElementById(id).textContent = values[index];
    });
}

function initClock() {
    updateClock(); // Initial call to set the clock right away
    setInterval(updateClock, 1000); // Update every second
}
