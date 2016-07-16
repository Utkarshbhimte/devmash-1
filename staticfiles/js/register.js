$(document).ready(function() {

    $.ajaxSetup({
        headers: { "X-CSRFToken": getCookie("csrftoken") }
    });

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
    var gender = "";
    $("#register").click(function() {
        if ($('#test1').is(':checked')) {
            gender = "male";
        }
        if ($('#test2').is(':checked')) {
            gender = "female";
        }
        $.ajax({
            url: '/',
            type: 'post',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                f_name: $("#first_name").val(),
                l_name: $("#last_name").val(),
                course: $("#course").val(),
                email: $("#email").val(),
                usn: $("#usn").val(),
                mobile: $("#mobile").val(),
                year: $("#year").val(),
                branch: $("#branch").val(),
                gender: gender,
                github: $("#github").val(),
                csrfmiddlewaretoken: '{{ csrf_token }}'
            }),
            headers: { "Content-Type": "application/json" },
            success: function(data) {
                console.log(data);
                if (data["message"] == "This field may not be blank.") {
                    alert("All the fields are required");
                } else if (data["message"] == "Successfully Registered!!") {
                    alert(data["message"]);
                    $("#first_name").val("");
                    $("#last_name").val("");
                    $("#course").val("");
                    $("#email").val("");
                    $("#usn").val("");
                    $("#mobile").val("");
                    $("#year").val("");
                    $("#branch").val("");
                    $("#github").val("");
                    window.location = "/";
                } else {
                    alert(data["message"]);
                }

            }
        });

    });
});
