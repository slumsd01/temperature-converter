$("#results").attr("hidden", true)

// user enters a value into the form
$("#convertBtn").on("click", function(event) {
    event.preventDefault()
    convertValue()
})

function convertValue() {
    // math is performed on the value to convert c into f
    // multiply by 1.8 and add 32
    let base = $("#cTemp").val()
    let newValue = Math.round(base * 1.8 + 32)

    // both numbers are printed on the page
    $("#results").attr("hidden", false)
    $("#base").append(base)
    $("#newValue").append(newValue)
}

// reset button to refresh the page and remove the values
$("#resetBtn").on("click", function(event) {
    window.location.reload()
})