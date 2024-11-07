// the first thing that we are going to do is make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // now test to see if our JS is connected
    console.log('Our JS is connected');

    console.log('Hello World! This is Week 9');
    // Now we will look at how to declare a variable in JS
    let a = 200;
    let b = 180;
    let c = a + b;
    // the const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    // now let's look at how we can output our HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + "<p>Let: The value of C is: " + c + "</p>" + "<p> Const: The total is: " + total + "</p>";

   
// Well now we cant see our HTML ... Lets style it with JS


document.getElementById("ex1").style.color = "#f8f8f8";
document.getElementById("ex1").style.padding = "0% 10%";
// now lets create our global header
document.getElementById("lesson-global-header").innerHTML = 
"<div id= 'logo-container'>" + 
    "<a href='index.html'>" +
        "<img id='logo' src='./img/logo.png'alt= 'header logo'>"+
        "</a>"+
        "</div>"+
        "<nav><menu>" +
        "<li><a href='#'>Item1</a></li>"+
        "<li><a href='#'>Item2</a></li>"+
        "<li><a href='#'>Item3</a></li>"+
        "</menu></nav>";

document.getElementById("name").innerHTML = "<h5> JavaScript is Confusing</h5>" 
+ "<p> How do write java reddit? </p>" + "<div id= 'logo-container'>" 
+ "<img id='logo' src='./img/logo.png'alt='header logo'>"

document.getElementById("name").style.color = "#c2371c"

document.getElementById("name").style.background = "black"




    



    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; algin-items: center;";
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";
    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";

    



}); 