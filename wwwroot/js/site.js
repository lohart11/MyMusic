$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }
        var rate = parseFloat($('#rate').val());
        var total = hours * rate;
        $('#total').val(total.toFixed(2));
    });
});
