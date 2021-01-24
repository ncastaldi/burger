$(document).ready(function () {

    // Declare DOM Variables
    const orderForm = $(".orderForm");
    const eatButton = $(".change-devoured");

    // Declare JavaScript Variables

    // Function Definitions
    function sidenav() {
        $('.sidenav').sidenav();
    };

    function newBurger(event) {
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
    };

    function eatReturn() {
        $(".change-devoured").on("click", function (event) {
            const id = $(this).data("id");
            const newState = $(this).data("newstate");

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
    }

    // Function Calls

    // Define Event Listeners
    orderForm.on("submit", newBurger);
    eatButton.on("click", eatReturn);
})