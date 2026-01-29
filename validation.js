$(document).ready(function() {
    $.validator.addMethod("strictEmail", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    }, "Please enter a valid email address");

    $("#contactForm").validate({
        rules: {
            fullName: {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            email: {
                required: true,
                strictEmail: true
            },
            subject: {
                required: true,
                minlength: 3,
                maxlength: 100
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 500
            }
        },
        messages: {
            fullName: {
                required: "Please enter your full name",
                minlength: "Name must be at least 2 characters",
                maxlength: "Name cannot exceed 50 characters"
            },
            email: {
                required: "Please enter your email address"
            },
            subject: {
                required: "Please enter a subject",
                minlength: "Subject must be at least 3 characters",
                maxlength: "Subject cannot exceed 100 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Message must be at least 10 characters",
                maxlength: "Message cannot exceed 500 characters"
            }
        },
        errorElement: "span",
        errorClass: "error",
        validClass: "valid",
        highlight: function(element) {
            $(element).addClass("error");
        },
        unhighlight: function(element) {
            $(element).removeClass("error");
        },
        submitHandler: function(form) {
            alert("Thank you for your message! We will get back to you soon.");
            form.reset();
            return false;
        }
    });
});