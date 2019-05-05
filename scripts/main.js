const container = document.querySelector('#addressList')
const saveBtn = document.querySelector('#saveEntry')
const person = document.querySelector('#fullName')
const address = document.querySelector('#address')



makeAddress = () => {
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let div = document.createElement('div')

    h1.textContent = person.value
    h2.textContent = address.value
    div.className = 'person-address'

    container.appendChild(div)
    div.appendChild(h1)
    div.appendChild(h2)
}

saveBtn.addEventListener('click', makeAddress)
