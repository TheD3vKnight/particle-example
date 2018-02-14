export default class Login{
    constructor(options){
        this.options = options
    }

    getContent(){


        let loginCard = document.createElement('div')
        loginCard.style.width = '50%'
        loginCard.style.height = '300px'
        loginCard.style.width = '400px'
        loginCard.style.margin = 'auto'
        loginCard.style.boxShadow = '0px 0px 10px #19d8ff'
        loginCard.style.borderWidth = '2px'
        loginCard.style.borderStyle = 'none'
        loginCard.style.borderColor = 'gold'
        loginCard.style.background  = 'rgba(0, 0, 0, 0.8)'
        loginCard.style.borderRadius = '25px'

        let loginHeader = document.createElement('div')
        loginHeader.style.height = '10%'

        loginCard.append(loginHeader)

        let loginBody =  document.createElement('form')
        loginBody.style.height = '80%'
        loginBody.style.display = 'flex'
        loginBody.style.margin = 'auto'
        loginCard.append(loginBody)

        let formContainer = document.createElement('div')
        formContainer.style.margin = 'auto'
        loginBody.append(formContainer)
    
        let usernameLabel = document.createElement("LABEL")
        let user = document.createTextNode("Username")
        usernameLabel.setAttribute("for", "username")
        usernameLabel.style.color = 'white'
        usernameLabel.appendChild(user)
        formContainer.append(usernameLabel)
    
        let userName = document.createElement('input')
        userName.type = 'email'
        userName.value = ''
        userName.style.display = 'flex'
        userName.style.margin = 'auto'
        formContainer.append(userName)
        
        let passwordLabel = document.createElement("LABEL")
        let t = document.createTextNode("Password")
        passwordLabel.setAttribute("for", "password")
        passwordLabel.style.color = 'white'
        passwordLabel.appendChild(t)
        formContainer.append(passwordLabel)
    

        let password = document.createElement('input')
        password.type = 'password'
        password.value = ''
        password.style.display = 'flex'
        password.style.margin = 'auto'
        formContainer.append(password)


        let loginButton = document.createElement('button')
        loginButton.type = 'submit'
        loginButton.style.display = 'flex'
        loginButton.style.margin = 'auto'
        loginButton.style.marginTop = '10px'    
        loginButton.style.backgroundColor = '#89f6fb'
        loginButton.innerHTML = 'Login!'
        loginButton.onclick = () => {
            console.log('you clicked?')
            console.log(userName.value)
            console.log(password.value)

        }

        formContainer.append(loginButton)

        return loginCard
    }

}