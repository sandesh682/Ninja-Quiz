const form = document.querySelector('form');
correct = ['B','B','B','B'];

form.addEventListener('submit', e => {
   
    e.preventDefault();
    let score = 0;
    
    if(e.target.q1.value == correct[0])
     {
         score += 25;
     }
     if(e.target.q2.value == correct[1])
     {
         score += 25;
     }
     if(e.target.q3.value == correct[2])
     {
         score += 25;
     }
     if(e.target.q4.value == correct[3])
     {
         score += 25;
     }

     const div = document.querySelector('.d-none');
     div.classList.remove('d-none');
     const h1 = document.querySelector('.d-inline');
     

     scrollTo(0,0);
     
     count = 0;

     const timer = setInterval(() => {
       h1.innerText = count+"%";
       if (count == score){
           clearInterval(timer);
       }
       else{
        count = count + 1;
       }
     },10);

});