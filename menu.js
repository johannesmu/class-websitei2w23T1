// javascript comment
// function
function onDocumentLoad() {
    // refer to nav button
    const btn = document.querySelector(".nav-button")
    // refer to navigation
    const nav = document.querySelector(".navigation")
    // listen for click on nav button
    btn.addEventListener("click", function(){
        // code to run when btn is clicked
        // if navigation is open
        if( nav.classList.contains("open") ) {
            // remove the class "open"
            nav.classList.remove("open")
        }
        // if navigation is closed
        else {
            // add the class "open"
            nav.classList.add("open")
        }
    } )
}

window.addEventListener("load", onDocumentLoad )