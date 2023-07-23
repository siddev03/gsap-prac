 gsap.registerPlugin(ScrollTrigger);


   const tl = gsap.timeline();

   tl.from(".nav", {
     opacity: 0,
     delay: 0.3,
   });

   tl.from(".nav h1, .nav-2 a, .btn", {
     y: -80,
     opacity: 0,
     duration: 0.8,
     stagger: 0.3,
   });

   tl.from(".left h1, .text", {
     x: -500,
     opacity: 0,
     duration: 0.5,
   });

   tl.from(".right img", {
     scale: 2,
     opacity: 0,
     duration: 0.5,
   });

   
   const tlScroll = gsap.timeline({
     scrollTrigger: {
       trigger: "#page2 .box", 
       scroller: "body",
        
     },
   });

   tlScroll.from("#page2 .box", {
     scale: 0,
     opacity: 0,
     duration: 1,
     stagger: 0.3,
   });
 