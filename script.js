document.addEventListener('DOMContentLoaded', function() {
    const htmlCodeInput = document.getElementById('htmlCode');
    const extractButton = document.getElementById('extractButton');

    extractButton.addEventListener('click', function() {
        const htmlCode = htmlCodeInput.value;
        const imageSrc = extractImagesFromHtml(htmlCode);

        if (imageSrc) {
            // Create an invisible anchor element to trigger the download
            const anchor = document.createElement('a');
            anchor.href = imageSrc;
            anchor.download = 'downloaded_image.jpg';
            anchor.style.display = 'none';
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }
    });

    function extractImagesFromHtml(htmlCode) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlCode, 'text/html');
        const imgElement = doc.querySelector('img');

        if (imgElement) {
            return imgElement.getAttribute('src');
        }

        return '';
    }
});
