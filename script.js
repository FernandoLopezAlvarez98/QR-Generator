function descargar(){
  console.log("Hola mundo");
}

function generateQR() {
    var inputValue = document.getElementById('qr-input').value;
  
    if (!inputValue) {
      alert('Ingrese un texto para generar el código QR.');
      return;
    }
  
    document.getElementById('qr-code').innerHTML = '';
  
    var qrcode = new QRCode(document.getElementById('qr-code'), {
      text: inputValue,
      width: 128,
      height: 128
    });
  
    var downloadButton = document.getElementById('download-button');
    downloadButton.addEventListener('click', function() {
      var qrImage = document.getElementById('qr-code').querySelector('img');
      var qrCanvas = document.createElement('canvas');
      var canvasContext = qrCanvas.getContext('2d');
      const qr_size = 300;
      qrCanvas.width = qr_size;
      qrCanvas.height = qr_size;
  
      canvasContext.drawImage(qrImage, 0, 0, qr_size, qr_size);
  
      var resizedQRDataURL = qrCanvas.toDataURL('image/png');
  
      saveAs(resizedQRDataURL, 'codigo_qr.png');
    });
  }
  
  document.getElementById('qr-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      generateQR();
    }
  });