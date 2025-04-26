function customRender(reactElement, container) {                          //a custon render function to show on screen
/*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])  
    }
    container.appendChild(domElement)
} 

const reactElement = {                                                  //a js object which (key:value) would be embedded in dom
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)