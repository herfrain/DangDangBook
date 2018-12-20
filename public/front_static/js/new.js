function choseAll(){
	var choseAll=document.getElementById("allHobby");
	var hobbies=document.getElementsByName("hobby");
	for(var i=0;i<hobbies.length;i++){
		hobbies[i].checked=choseAll.checked;
	}
}