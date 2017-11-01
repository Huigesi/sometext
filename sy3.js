/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-31 16:57:54
 * @version $Id$
 */

eventHander.addHander(window,"load",init1);
function init1(){
	//创建div
	var div1=document.getElementById("div1");
	var newdiv=document.createElement("div");
	//创建图片
	newdiv.setAttribute("id","newdiv");
	var newimg=document.createElement("img");
	newimg.setAttribute("src","images/1.jpg");
	//添加图片到div
	newdiv.appendChild(newimg);
	//添加div到body
	document.body.appendChild(newdiv);
	newdiv.innerHTML="";

}
eventHander.addHander(window,"load",init2);
function init2(){
	var div1=document.getElementById("div1");
	var arr=document.getElementsByTagName("a");
	for (var i = 0; i < arr.length; i++) {
		eventHander.addHander(arr[i],"mouseover",mouseover);
		eventHander.addHander(arr[i],"mouseout",mouseout);
		eventHander.addHander(arr[i],"click",click);
	}
}
function mouseover(){
	var event =event||window.event;
	var a = event.srcElement;
	var  path=a.getAttribute("href");
	var newdiv=document.getElementById("newdiv");
	newdiv.innerHTML="";
	var newimg=document.createElement("img");
	var title=document.createElement("div");
	newimg.setAttribute("src",path);
	var title1=a.getAttribute("title");
	newdiv.appendChild(newimg);
	title.innerHTML=title1;
    newdiv.appendChild(title);
}
function click() {
	var event=event||window.event;
	eventHander.preventDefault(event);
}
function mouseout(){
	var newdiv=document.getElementById("newdiv");
	newdiv.innerHTML="";
}