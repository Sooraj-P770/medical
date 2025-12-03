let pageHistory = [];

// Navigate to a screen
function navigate(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.add('hidden'));

    const targetScreen = document.getElementById(screenId);
    if (!targetScreen.classList.contains('hidden')) return;

    // Save current screen to history (if not splash)
    const current = document.querySelector('.screen:not(.hidden)');
    if (current && current.id !== 'splash') {
        pageHistory.push(current.id);
    }

    targetScreen.classList.remove('hidden');
}

// Go back to previous screen
function goBack() {
    if (pageHistory.length > 0) {
        const previous = pageHistory.pop();
        navigate(previous);
    } else {
        navigate('home'); // fallback
    }
}

// Example command functions
function sendCommand(cmd) {
    alert("Command Sent: " + cmd);
}

function refreshStatus() {
    document.getElementById('statusBox').innerText = "Robot is active. Battery: 85%";
}

function testConnection() {
    alert("Testing connection to " + document.getElementById('robotIP').value);
}

function checkPIN() {
    const pin = document.getElementById('pinInput').value;
    if (pin === "1234") {
        navigate('admin');
    } else {
        alert("Incorrect PIN!");
    }
}
