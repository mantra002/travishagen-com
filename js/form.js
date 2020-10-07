$(function(){
	
	$("#contact-form").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});

	$('#success-modal').on('shown.bs.modal', function () {
		var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 2000));
	});

});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#formName").val();
    var email = $("#formEmail").val();
    var message = $("#formBody").val();

    $.ajax({
        type: "POST",
        url: "php/message.php",
        data: "formName=" + name + "&formEmail=" + email + "&formBody=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
            }
        }
    });
}

function showModal(message)
{
	$("#success-modal-text").text(message);
	$("#success-modal").modal('show');
}

function formSuccess(){
	$("#contact-form")[0].reset();
	$(".modal-content").removeClass("border-warning");
	$(".modal-content").addClass("border-success");
	showModal("Your message has been successfully sent!");
}

function formError(){
	$(".modal-content").removeClass("border-success");
	$(".modal-content").addClass("border-warning");
	showModal("An error has occurred, please try again.");
}
