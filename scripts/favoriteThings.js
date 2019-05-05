const thingsContainer = document.querySelector('#favoriteThings')
const thingsBtn = document.querySelector('#thingButton')
const thing = document.querySelector('#thing')
const store = document.querySelector('#store')


makeThing = () => {
    let h1 = document.createElement('h1')

    h1.textContent = `I can purchase ${thing.value} at ${store.value}`

    thingsContainer.appendChild(h1)
    thing.value = ''
    store.value = ''
    thing.focus()
}

thingsBtn.addEventListener('click', () => {
    if (thing.value.length === 0 && store.value.length === 0) {
        alert('please fill out all fields')
    } else {
        makeThing()
    }
})