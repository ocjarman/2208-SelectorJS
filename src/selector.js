// // YOUR CODE HERE
// YOUR CODE HERE


class ${
    constructor(selector) {
        this.selector = selector;
        this.elements = [];
        if (selector[0] === '.') {
            let className = selector.slice(1)
            this.elements.push(...document.getElementsByClassName(className));
        }
        else if (selector[0] === '#') {
            let idName = selector.slice(1)
            this.elements.push(document.getElementById(idName))
        } else {
            this.elements.push(...document.getElementsByTagName(selector))
        }
    }
    hide = () => {
        this.elements.forEach((el) => (el.style.display = 'none'))
        return this;
    }

    show = () => {
        this.elements.forEach((el) => (el.style.display = 'inherit'))
        return this;
    }

    addClassName = (name) => {
        this.elements.forEach((el) => (el.classList = `${name}`))
        return this;
    }

    removeClassName = (input) => {
        this.elements.forEach((el) => (el.classList.remove(input)))
        return this;
    }

    text = (inputText) => {
        this.elements.forEach((el) => (el.innerText = inputText))
        return this;
    }

    addChild = (child) => {
        this.elements.forEach((el) => (el.appendChild(document.createElement(child))))
        return this;
    }
}
  






// const selection = new $('#main')
// selection.hide() // "hides" the DOM element with the id of "main"
// const selection = new $('.field')
// selection.text("Hello World!") // adds the text "Hello World" to all of the elements with the "field" class
// const selection = new $('div')
// selection.addClassName("bg-blue") // adds a CSS class called "bg-blue" to all elements with the "div" tag name