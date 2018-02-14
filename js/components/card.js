export default class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    // Create Card
    let card = document.createElement('div')
    card.style.width = '50%'
    card.style.height = '300px'
    card.style.margin = 'auto'
    card.style.boxShadow = '0px 0px 10px #19d8ff'
    card.style.borderWidth = '2px'
    card.style.borderStyle = 'none'
    card.style.borderColor = 'gold'
    card.style.background  = 'rgba(0, 0, 0, 0.7)'
    card.style.borderRadius = '25px'
    
    // Create Card Header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '10%'

    // Create Card Title
    let cardTitle = document.createElement('div')
    cardTitle.append(this.options.name)

    cardTitle.style.color = '#dddddd'
    cardTitle.style.margin = 'auto'
    cardTitle.style.textAlign = 'center'
    cardTitle.style.fontWeight = 'bold'
    cardTitle.style.fontFamily = 'stencil'
    cardTitle.style.fontSize = '24px'
    cardTitle.style.fontVariant = 'small-caps'
    cardTitle.style.width = '100%'
    cardHeader.append(cardTitle)

    card.append(cardHeader)

    // Create Card Body
    let cardBody = document.createElement('div')
    cardBody.style.height = '80%'
    cardBody.style.display = 'flex'
    cardBody.style.margin = 'auto'

    // Create login component
    // Create divs for username password
    // Create a button with onclick function

    let usrnmeContainer = document.createElement('div')
    usrnmeContainer.style.display = 'flex'
    usrnmeContainer.style.margin = 'auto'
    cardBody.append(usrnmeContainer)


    let userName = document.createElement('input')
    userName.type = 'email'
    userName.style.display = 'flex'
    usrnmeContainer.append(userName)
    
    let passwordContainer = document.createElement('div')
    passwordContainer.style.display = 'flex'
    passwordContainer.style.margin = 'auto'
    cardBody.append(passwordContainer)

    let password = document.createElement('input')
    password.type = 'password'
    password.style.display = 'flex'
    passwordContainer.append(password)

    card.append(cardBody)

    // Create Card Footer
    let cardFooter = document.createElement('div')
    cardFooter.style.height = '10%'
    cardFooter.style.textAlign = 'center'

    let cardFooterLink = document.createElement('a')
    cardFooterLink.href = this.options.link
    cardFooterLink.append('Click for more info')
    cardFooterLink.style.color = '#dddddd'
    cardFooterLink.style.margin = 'auto'
    cardFooterLink.style.fontSize = '18px'

    cardFooter.append(cardFooterLink)

    card.append(cardFooter)

    return card
  } 
  
}
