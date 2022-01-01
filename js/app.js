window.addEventListener('scroll', () => {
    let contents = document.querySelectorAll('.row');
    
    contents.forEach(content => {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(contentPosition < screenPosition){
            console.log(contentPosition);
            console.log(screenPosition);
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    });
    
})