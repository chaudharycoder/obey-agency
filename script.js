function loadingAnimation(){
    var tl=gsap.timeline();
    tl.from(".line h1",{
         y:150,
         stagger:0.25,
         duration:0.6,
         delay:0.5
    })
    tl.from("#line1-part1",{
        opacity:0,
        onStart:function (){
    
            var h5timer=document.querySelector("#line1-part1 h5");
            var grow=0;
            
            setInterval(function () {
                if(grow<100){
               
                h5timer.innerHTML= grow++;
                 }
                 else{
             
               h5timer.innerHTML= grow;
                 }
            
            }, 35);
        }
    })
    
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:4
    })
    tl.from("#page1",{
        y:1600,
        opacity:0,
        delay:0.2,
        ease:Power4
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#nav",{
        opacity:0
      })
    tl.from(".hero h1, #hero3 h2,#hero3 h3",{
        y:120,
        stagger:0.25
    })
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function (dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4,#nav .brand__svg" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
     
}
cursorAnimation();
