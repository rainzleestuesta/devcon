function submitProgress() {
    // Get form values
    const exercise = document.getElementById('exercise').value;
    const reps = document.getElementById('reps').value;
    const sets = document.getElementById('sets').value;

    // Create a new list item
    const logItem = document.createElement('li');
    logItem.textContent = `${exercise}: ${sets} Sets x ${reps} Reps`;

    // Append to the log
    const logList = document.getElementById('logList');
    logList.appendChild(logItem);

    // Clear the form
    document.getElementById('progressForm').reset();
}
