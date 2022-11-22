// Write your code here!
const main = document.querySelector("#main")

main.remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.innerHTML ="Mercy is the champion"

document.body.prepend(newHeader)