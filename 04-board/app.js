const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498bd', '#e67e22', '#2ecc71', '#e74c5c', '#8e46ad', '#3499bd', '#e68e22', '#2ecc73']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {

   const square = document.createElement('div')// с каждой иттерацией создаем элемент

   square.classList.add('square')// добавим для него класс

   // добавим каждому элементу слушателей событий
   square.addEventListener('mouseover', () =>
      setColor(square))

   square.addEventListener('mouseleave', () =>
      removeColor(square))

   board.append(square)// добавим элемент на доску
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color

   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'

   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   // 1й способ******
   // const index = Math.floor(Math.random() * colors.length)
   // return colors[index]
   // 2й способ******

   return colors[Math.floor(Math.random() * colors.length)]


}
  // Math.random - рандомная строчка
   // lenght - длина массива
   // Math.floor - округление в большую сторону