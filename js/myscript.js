$(document).ready(function() {
    $("h2").css("text-decoration","underline");
    $("ul").css("border","solid 1px red");
})

//better method not using inline styling
$(document).ready(function() {
    $("h2").addClass("underline");
    $("ul").addClass("border");
})