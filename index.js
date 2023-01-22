//   .....Navbar scroll.....
var nav=document.querySelector('nav');
window.addEventListener('scroll', function(){
  if(window.pageYOffset>100){
    nav.classList.add('bg-dark', 'shadow');
  }else{nav.classList.remove('bg-dark', 'shadow')}
})

// ......login...... 
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container');

  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });


