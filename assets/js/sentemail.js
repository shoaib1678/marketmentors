$(document).ready(function() {
    $("#start-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            number: "required",
            subject: "required",
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            number: "Please enter your phone number",
            subject: "Please enter a subject",
            message: "Please enter your message"
        },
        submitHandler: function(form) {
            
        }
    });
});
$(document).ready(function() {
    $("#contactform").validate({
        rules: {
            cname: "required",
            cemail: {
                required: true,
                email: true
            },
            cnumber: "required",
            csubject: "required",
            cmessage: "required"
        },
        messages: {
            cname: "Please enter your name",
            cemail: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            cnumber: "Please enter your phone number",
            csubject: "Please enter a subject",
            cmessage: "Please enter your message"
        },
        submitHandler: function(form) {
            
        }
    });
});

function sendmsg() {
    if ($("#contactform").valid()) {
        $("#csbmtbtn").html("Please Wait..");
        $("#csbmtbtn").prop("disabled",true);
        var name = $("#cname").val();
    var email = $("#cemail").val();
    var phone_number = $("#cnumber").val();
    var msg_subject = $("#csubject").val();
    var message = $("#cmessage").val();

    emailjs.send("service_uf57zcj", "template_c5nmj8n", {
        from_name: name,
        from_email: email,
        from_phone: phone_number,
        subject: msg_subject,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        $("#contactform")[0].reset(); // Reset form after successful submission
        $("#sbmtbtn").html("Send Message");
        $("#sbmtbtn").prop("disabled",false);
    }, function(error) {
        alert('Failed to send email. Error: ' + JSON.stringify(error));
    });
    }else{
        return;
    }  
}

function sendmail() {
    if ($("#start-form").valid()) {
        $("#sbmtbtn").html("Please Wait..");
        $("#sbmtbtn").prop("disabled",true);
        var name = $("#name").val();
    var email = $("#email").val();
    var phone_number = $("#number").val();
    var msg_subject = $("#subject").val();
    var message = $("#message").val();

    emailjs.send("service_uf57zcj", "template_c5nmj8n", {
        from_name: name,
        from_email: email,
        from_phone: phone_number,
        subject: msg_subject,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        $("#start-form")[0].reset(); // Reset form after successful submission
        $("#sbmtbtn").html("Send Message");
        $("#sbmtbtn").prop("disabled",false);
    }, function(error) {
        alert('Failed to send email. Error: ' + JSON.stringify(error));
    });
    }else{
        return;
    }  
}