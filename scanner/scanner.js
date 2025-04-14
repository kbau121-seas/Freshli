const scannerDiv = document.getElementById("scanner");
const backButton = document.getElementById("back-button");

function startScanner() {
    const html5QrCode = new Html5Qrcode("scanner");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
            console.log("Scanned:", decodedText);
            await html5QrCode.stop();
            sessionStorage.setItem("scannedCode", decodedText);
            window.location.href = "../inventory/inventory.html";
        },
        (errorMessage) => {
       
        }
    );
}

backButton.onclick = () => {
    window.location.href = "../inventory/inventory.html";
};

window.addEventListener("DOMContentLoaded", startScanner);
