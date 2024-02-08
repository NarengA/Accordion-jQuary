//open with LIVE SERVER

$(document).ready(function () {
    // Use jQuery to fetch JSON data
    $.getJSON("Data.json", function (data) {
        // Iterate over the data array
        $(data).each(function (i, hero) {
            // Create accordion content using jQuery
            var accordionContent = $("<div>").addClass("accordion-content");

            // Create header with span and i elements
            var header = $("<header>");
            var span = $("<span>").addClass("accordion-content-title").text(hero.head);
            var icon = $("<i>").addClass("fa-solid fa-plus");

            // Append span and icon to header
            header.append(span, icon);

            // Create paragraph with description
            var description = $("<p>").addClass("accordion-content-description").text(hero.body);

            // Append header and description to accordion content
            accordionContent.append(header, description);

            // Append the accordion content to the .accordion container using jQuery
            $(".accordion").append(accordionContent);
        });
    })
    .done(function () {
        alert("completed!");
    })
    .fail(function (e) {
        console.log("error:");
        console.log(e);
    })
    .always(function () {
        console.log("always run");
    });

    // jQuery accordion functionality
    $(document).on("click", ".accordion-content header", function () {
        var accordionItem = $(this).parent(); // Get the parent accordion content
        accordionItem.toggleClass("is-open"); // Toggle the is-open class

        var description = accordionItem.find(".accordion-content-description");
        if (accordionItem.hasClass("is-open")) {
            // If open, set height to scrollHeight and change icon
            description.height(description.prop("scrollHeight"));
            accordionItem.find("i").removeClass("fa-plus").addClass("fa-minus");
        } else {
            // If closed, set height to 0 and change icon
            description.height(0);
            accordionItem.find("i").removeClass("fa-minus").addClass("fa-plus");
        }

        // Close other open accordion items
        accordionItem.siblings(".is-open").removeClass("is-open").find(".accordion-content-description").height(0);
        accordionItem.siblings().find("i").removeClass("fa-minus").addClass("fa-plus");
    });
});
