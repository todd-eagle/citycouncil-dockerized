$(document).ready(function() {

    $('.btn--do-it-btn').click(function() {
        if( $("#name").val().length > 4 &&  isEmail($("#email").val())) {
            $(".mail-status").addClass('spinning-gif');
            $default = "call prospective voters";
            $.ajax({
                type: "POST",
                url: "contact_mail.php",
                data: 'name=' + $("#name").val() + '&email=' + $("#email").val() + '&volunteer=' +
                    $('input[name=volunteer]:checked', '.contact-form').val(),
                success: function (data) {
                    $(".mail-status").removeClass('spinning-gif');
                    $(".contact-form").trigger("reset");
                    $("input[name=volunteer][value='" + $default + "']").prop('checked', true);
                    $(".mail-status").html(data);
                },
                error: function (xhr) {
                    alert("message not sent.")
                    console.log(xhr);
                }
            });
        }
    });
});

function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}