$(() => {
    $(".change-sleep").on("click", function () {
      const id = $(this).data("id");
      const newSleep = $(this).data("newsleep");
  
      const newSleepState = { value: newSleep };
  
      // Send the PUT request.
      $.ajax(`/api/cats/${id}/sleepy`, {
        type: "PUT",
        // Convert object to JSON
        data: JSON.stringify(newSleepState),
        // Tell the server that this request contains JSON
        contentType: "application/json; charset=UTF-8",
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
  