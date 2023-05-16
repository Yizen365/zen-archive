const wrapper = document.querySelector('.logreg-box');
const register = document.querySelector('.register-link');
const login = document.querySelector('.login-link');

register.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})
login.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})