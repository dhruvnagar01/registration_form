const Name = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(Name.value === '' || Name.value == null) {
        messages.push('Name is required')
    }
    
    if(password.value.length <= 6 || password.value.length > 20 ) {
        messages.push('Password charcters should be in 6 to 20 range only')
    }

    
    var atposition = email.indexOf('@');
    var dotposition = email.lastindexOf('.');

    if ( atposition < 1 || dotposition <atposition +2 || dotposition + 2 > email.length) {
            messages.push('Email not valid')
    }


    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})