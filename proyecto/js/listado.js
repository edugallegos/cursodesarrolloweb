$(document).ready(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr>"+
            "<td>" + val.id + "</td>"+
            "<td>" + val.name + "</td>"+
            "<td>" + val.username + "</td>"+
            "<td>" + val.email + "</td>"+
            "<td>" + val.address.city + "</td>"+
            "</tr>");
        });

        /* $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");*/

        $("#listado tbody").append(items.join(""));
    });


})