function hide(){
            document.getElementById("demo").style.overflow = "hidden";
            document.getElementById("demo").style.width = "0px";
}


function loadDoc()
{
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "ajax.txt", true);
	xhttp.send();
}
