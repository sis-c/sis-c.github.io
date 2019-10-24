const date = new Date();
const day = date.getDay();
console.log(day);
//  console.log(date);
if (day == 3) {
	document.getElementsByClassName("pancakes")[0].style.display = "block";
}
// }else{
// 	document.getElementsByClassName("pancakes").style.display ="none";
// }