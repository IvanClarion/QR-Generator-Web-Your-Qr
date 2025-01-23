function generateQRCode() {
    // Get the value entered by the user
    const value = document.getElementById('qr-code-value').value;
    // Set the options for the QR code in dictionary format
    const options = {
    value: value, // The text or URL to encode in the QR code
    size: 300, // The size of the QR code in pixels
    level: 'H' // The error correction level of the QR code
    };
    // Create a new QR code object
    const qrCode = new QRious(options);
    // Get the QR code image as a data URL
    const qrCodeImage = qrCode.toDataURL();
    // Display the QR code image on the webpage
    // you can assign your default image here
    document.getElementById('qr-code-image').src = qrCodeImage;
}
