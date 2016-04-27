$(function() {

    $("#recipeForm input,#recipeForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var username = $("input#username").val();
            var email = $("input#email").val();
            var recipe = $("textarea#recipe").val();
            var uName = username; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (uName.indexOf(' ') >= 0) {
                uName = username.split(' ').slice(0, -1).join(' ');
            }
    
            
            $.ajax({
                url: "././mail/submit.php",
                type: "POST",
                data: {
                    username: username,
                    email: email,
                    recipe: recipe
                },
                cache: false,
                success: function() {
                    // Enables button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //Clear all fields
                    $('#recipeForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + uName + ", my mail server is down at the moment. Please try again later! :)");
                    $('#success > .alert-danger').append('</div>');
                    //Clear all fields
                    $('#recipeForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
    
    $('myImage').ajaxForm({
        beforeSend:function(){},
        uploadProgress:function(){},
        success:function(){},
        complete:function(){}
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#username').focus(function() {
    $('#success').html('');
});
