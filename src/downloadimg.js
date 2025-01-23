document.getElementById('download-qr').addEventListener('click', downloadImage);

function downloadImage() {
    const image = document.getElementById('qr-code-image');
    const link = document.createElement('a');
    const input = document.getElementById('qr-code-value');

    if (!input.value.trim()) {
        input.reportValidity();
        input.focus();
        return;
    }
    link.href = image.src;
    link.download = 'qr-code.png';
    link.click();
  }
  