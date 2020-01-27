interface volume { 
    side:number, 
    calculate: (side)=>number 
 } 
 
 var cube:volume = {
    side: null, 
    calculate: (side):number =>{return (side*side*side);} 
 }
//  console.log(cube.calculate(5.5));

 interface colorcube extends volume {
     color: string
 }

 var ccube = <colorcube>{};
 ccube.color = "red";
 ccube.calculate = (side):number =>{return (side*side*side);}

 console.log(ccube.calculate(5.5));
 console.log(ccube.color);
