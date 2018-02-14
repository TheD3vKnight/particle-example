import loginCard from '../components/login'

export default class Dashboard {
  constructor () {
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#E0FFFF'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontFamily = 'stencil'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '50px'
    title.append('Login Page')
    
    container.appendChild(title)

    let login = new loginCard()
    container.append(login.getContent())

    return container
  }

  animate() {
  }
}
