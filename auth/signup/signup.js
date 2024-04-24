$(document).ready(function() {
    $(".material-symbols-outlined").on("click", function() {
      var $input = $(this).prev();
      var type = $input.attr("type") === "password" ? "text" : "password";
      $input.attr("type", type);
      $(this).text(type === "password" ? "visibility_off" : "visibility");
    });
  });