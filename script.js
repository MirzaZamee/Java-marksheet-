function show(){
    var input = Number(prompt('Please input your number'));

    if(input <= 100 && input >= 90){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got Golden A+ 🥳</h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 89 && input >= 80){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got A+ 👏</h1>');
        document.body.style.background = "#3c3c3c"
    }else if(input <= 79 && input >= 70){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got A <span style="color:	#33FF66;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 69 && input >= 60){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got A- <span style="color:	#33FF66;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 59 && input >= 50){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got B <span style="color:	#33FF66;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 49 && input >= 40){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got C <span style="color:	#33FF66;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 39 && input >= 33){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Got D <span style="color:	#33FF66;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else if(input <= 32 && input >= 0){
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:42px; text-align: center;">You Have Failed <span style="color: #FF0000;">✔</span></h1>');
        document.body.style.background = "#3c3c3c";
    }else{
        document.write('<h1 style="font-family: Montserrat, sans-serif; color:#fff; position:absolute; top:46%; left: 50%; transform: translate(-50%, -50%); font-size:38px; text-align: center;">Please Enter A Valid Number</h1>');
        document.body.style.background = "#3c3c3c";
    }
}


