
function reset() {
    var ele = document.getElementsByName("star");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
}


window.document.addEventListener("click", clear);


function clear(event) {
   if (!document.getElementById("rating").contains(event.target)) reset();
}



  