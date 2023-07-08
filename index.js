
// <!--=========================== Scroll Animation Scrip ===========================-->

window.addEventListener('scroll',function(){

    const text = document.getElementById('text');
    if(window.scrollY>5){ text.classList.add('focus-in-expand-fwd')
      text.style.display="block"}
    else text.classList.remove('focus-in-expand-fwd')

  
    const about_left = document.getElementById('about-left');
    if(window.scrollY>600){ about_left.classList.add('focus-in-expand-fwd')
      about_left.style.display="block"}
    else about_left.classList.remove('focus-in-expand-fwd')

    const about_right = document.getElementById('about_right');
    if(window.scrollY>600){ about_right.classList.add('scale-up-hor-left')
    about_right.style.display="block"}
    else about_right.classList.remove('scale-up-hor-left')

    const pro_services = document.getElementById('pro_services');
    if(window.scrollY>1200){ pro_services.classList.add('scale-up-top')
    pro_services.style.display="flex"}
    else pro_services.classList.remove('scale-up-top')

    const contact_left = document.getElementById('contact_left');
    if(window.scrollY>1900){ contact_left.classList.add('scale-up-top')
    contact_left.style.display="block"}
    else contact_left.classList.remove('scale-up-top')

    const contact_right = document.getElementById('contact_right');
    if(window.scrollY>1900){ contact_right.classList.add('scale-up-top')
    contact_right.style.display="block"}
    else contact_right.classList.remove('scale-up-top')
    
})