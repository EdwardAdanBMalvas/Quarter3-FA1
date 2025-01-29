
	var txt;
	if(confirm("Can I share your personal information with the site?")){
		txt = "Name: " +nickname+ "\n" + "Height: " + heightx + "'" + heighty + "\n" + "Weight: " + weight + " lbs";
	}
	else{
		txt = "User does not wish to share his/her information.";
	}
	
	console.log(txt);
	
