const bodyElement = document.querySelector('body')
let mainElement = document.createElement('main')
let buttonElement = document.createElement('button')
let imgElement = document.createElement('img')
let aElement = document.createElement('a')

bodyElement.append(buttonElement)
bodyElement.append(mainElement)
mainElement.append(aElement)
mainElement.append(imgElement)

buttonElement.append('Remove button')

imgElement.src = 'sloth.jpg'
aElement.href = 'https://www.nationalgeographic.com/animals/mammals/group/three-toed-sloths/#:~:text=Sloths%20are%20identified%20by%20the,toed%20and%20three%2Dtoed%20sloths.&text=All%20sloths%20are%20built%20for,aided%20by%20their%20long%20claws.'

aElement.append('click for Sloth info!')

// let newDiv = document.createElement('button')
// newDiv.className = 'potato'
// newDiv.id = 1
// newDiv.append('remove')
// bodyElement.append(newDiv)
document.querySelector('button').addEventListener('click', function() {
    mainElement.remove()
})
// stretch goal 2
let inputElement = document.createElement('input-box')
let inputButtonElement = document.createElement('button2')
bodyElement.append(inputButtonElement)
bodyElement.append(inputElement)






