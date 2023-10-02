import './style.css'
import {Footer} from './components/Footer'
import { Header } from './components/Header'
import {getCurrentPage} from './Router';


document.querySelector('#app').innerHTML = /*html*/ `

${Header()}
${getCurrentPage()}
${Footer()}
`
