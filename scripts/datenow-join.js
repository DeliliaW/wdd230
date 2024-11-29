
function setTimestamp() {
        const timestampInput = document.getElementById('timestamp');
        timestampInput.value = Date.now();
    }

    window.onload = setTimestamp;
