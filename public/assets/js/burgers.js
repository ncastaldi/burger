$(function () {
    $('.sidenav').sidenav();

    $(".orderForm").on("submit", function (event) {

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#newBurger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-devoured").on("click", function (event) {
        const id = $(this).data("id");
        const newState = $(this).data("devoured");

        const newDevouredState = {
            devoured: newState
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});