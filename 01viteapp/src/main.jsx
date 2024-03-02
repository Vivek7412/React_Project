import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser=" Hum or React"

const reactElement= React.createElement(
    'a',
    {href:'https://flipkart.com', target:'_blank'},
    'Click me to visit Flipkart',
    anotherUser
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
    
     reactElement
    
   
)
