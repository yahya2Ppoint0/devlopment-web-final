function loginform() {
    var email =  document.form.email.value
    var password = document.form.password.value
    
    if (email === '') {
        alert('imail mi konch khawi')
        
    } else if (password !== '12345678') {
        alert('mot de pass incorecte')
    }
    }
    