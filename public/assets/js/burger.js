$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = true;

        var newState = {
            devoured: isDevoured
        };
        console.log(newState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function () {
            console.log("burger has been devoured", id);
            location.reload();
        });
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgName").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger")
            location.reload();
        });
    });
});