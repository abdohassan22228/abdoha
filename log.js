const pass_field = document.querySelector('.pass-key');
  const showBtn = document.querySelector('.eye');
  showBtn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        showBtn.textContent = "اخفاء";
        showBtn.style.color = "#3498db";
    }else{
        pass_field.type = "password";
        showBtn.textContent ="ظهور";
        showBtn.style.color = "#222";
    }
   });