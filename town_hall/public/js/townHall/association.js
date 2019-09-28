// JS scrpit for button changing on association page 
$(Document).ready(function() {
    $assoPage = $('#js-main-asso').hide();
    $assoButton = $assoPage.find('#js-asso-btn');

    $assoButton.on('click', function(e) {
        alert('alala');
    });
});