// resize header to size of browser window

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight + "px";
})

// set modal time delay before loading

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

//stop user from clicking off modal
$('#demo-modal').modal({
    backdrop: 'static',
    keyboard: false,
	mouse: false
})

//$('#demo-modal').modal({backdrop: 'static', keyboard: false}, 'show');