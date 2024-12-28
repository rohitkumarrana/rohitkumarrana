
$(document).ready(function () {
    $('#loadPdf').click(function () {
        // URL of the PDF file
        var pdfUrl = 'test.pdf'; // Change this to your PDF file path
        $('#pdfViewer').attr('src', pdfUrl).show();
    });
});
