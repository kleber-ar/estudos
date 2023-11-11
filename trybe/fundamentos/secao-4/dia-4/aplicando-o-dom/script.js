window.onload = () => {

    const setBackgroundColor = (color) => {
        let content = document.querySelector('.content');
        content.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);

    }

    
    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.color = color
          }
        localStorage.setItem('fontColor', color);

    }

    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = size;
          }
        localStorage.setItem('fontSize', size)
    
    }

    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.lineHeight = height;
          }
        localStorage.setItem('lineHeight', height)

    }

    const setFont = (fontFamily) => {
        let paragraphs = document.querySelectorAll('.paragraph')
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontFamily = fontFamily;
          }
        localStorage.setItem('font', fontFamily)

    }

    // back groundcolor

    let backgroundColorButtons = document.querySelectorAll('#background-color > button')
    for (let index = 0; index < backgroundColorButtons.length; index++) {
        backgroundColorButtons[index].addEventListener('click',(event) => {
            setBackgroundColor(event.target.innerText)
        })
        
    }

    // cor do texto

    let fontTextColorButtons = document.querySelectorAll('#font-color > button')
    for (let index = 0; index < fontTextColorButtons.length; index++) {
        fontTextColorButtons[index].addEventListener('click',(event) => {
            setFontColor(event.target.innerText)

        })
        
    }

    // tamanho da font 

    let fontSizeButtons = document.querySelectorAll('#font-size > button')
    for (let index = 0; index < fontSizeButtons.length; index++) {
        fontSizeButtons[index].addEventListener('click',(event) => {
            setFontSize(event.target.innerText)

        })
        
    }

    // espaço entre linhas

    let fontLineHeightButtons = document.querySelectorAll('#line-height > button')
    for (let index = 0; index < fontLineHeightButtons.length; index++) {
        fontLineHeightButtons[index].addEventListener('click',(event) => {
            setLineHeight(event.target.innerText)

        })
        
    }

    //tipo da font

    let fontButtons = document.querySelectorAll('#font-family > button')
    for (let index = 0; index < fontButtons.length; index++) {
        fontButtons[index].addEventListener('click',(event) => {
            setFont(event.target.innerText)

        })
        
    }

    const initialize = () => {
        let backgroundColor = localStorage.getItem("backgroundColor")
        setBackgroundColor(backgroundColor)
        let fontColor = localStorage.getItem("fontColor")
        setFontColor(fontColor)
        let fontSize = localStorage.getItem("fontSize")
        setFontSize(fontSize)
        let lineHeight = localStorage.getItem("lineHeight")
        setLineHeight(lineHeight)
        let fontFamily = localStorage.getItem("fontFamily")
        setFont(fontFamily)

      }

      initialize()

}
