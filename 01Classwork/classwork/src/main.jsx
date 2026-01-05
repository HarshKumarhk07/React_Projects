import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const actualReactElement = React.createElement(
    'a',
    {   
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Google Link'
)
const mainContainer = document.getElementById('root')
mainContainer.render(actualReactElement)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
