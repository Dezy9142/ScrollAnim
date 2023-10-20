var tl=gsap.timeline();

tl.from("#nav",{
    opacity:0,
    delay:0.3
})

tl.from("#nav h3 ,#nav p,#nav i",{
    y:-80,
    delay:0.5,
    duration:0.7,
    stagger:0.3,
    opacity:0
})
tl.from("#left h1",{
  x:-500,
  opacity:0,
  duration:0.5,
  stagger:0.4
})
tl.from("#right img",{
    opacity:0,
    scale:0.5,
    duration:0.5
})
tl.from("#box-container .box",{
    scale:0,
    opacity:0,
    duration:0.6,
    stagger:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 30",
        end:"top 60",
        pin:true,
        scrub:3,
        // markers:true
        
    }
})