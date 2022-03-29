$("#results").attr("hidden", true)

// user enters a value into the form
$("#convertBtn").on("click", function(event) {
    event.preventDefault()
    convertValue()
})

function convertValue() {
    // if user enters C, convert to F
    if ($("#cTemp").val() != "") {
        // multiply by 1.8 and add 32
        let cBase = $("#cTemp").val()
        let newCValue = Math.round(cBase * 1.8 + 32)

        // both numbers are printed on the page
        $("#results").attr("hidden", false)
        $("#base").append(cBase + "&deg;C")
        $("#newValue").append(newCValue + "&deg;F")
    } else if ($("#fTemp").val() != "") {
        // if user enters F, convert to C
        // divide by 1.8 subtract add 32
        let fBase = $("#fTemp").val()
        let newFValue = Math.round((fBase - 32) / 1.8)

        // both numbers are printed on the page
        $("#results").attr("hidden", false)
        $("#base").append(fBase + "&deg;F")
        $("#newValue").append(newFValue + "&deg;C")
    } else {
        $("#results").attr("hidden", false)
        $("#results").append()
    }
}

// reset button to refresh the page and remove the values
$("#resetBtn").on("click", function(event) {
    window.location.reload()
})