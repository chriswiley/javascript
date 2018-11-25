import '../scss/main.scss'

let o1 = { a: 1 }
let o2 = { b: 2 }
let o3 = { c: 3 }

let obj = Object.assign({ name: 'Chris' }, o1, o2, o3)
console.log(obj)
console.log(o1)
console.log(o2)
console.log(o3)



const barker = (state) => ({
  bark: () => console.log(`Bark! I am ${state.name}`)
})

const driver = (state) => ({
  drive: () => console.log(`Drive! I am ${state.name} and I am going ${state.speed}`)

})

const raceCarDog = (name) => {
  let state = {
    name,
    speed: 100,
  }
  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}
console.log(raceCarDog('Jack').bark())


// const fizzBuzzArray = []

// const fizzBuzz = function (num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       fizzBuzzArray.push(`${ i } fizzbuzz`)
//     } else if (i % 3 === 0) {
//       fizzBuzzArray.push(`${ i } fizz`)
//     } else if (i % 5 === 0) {
//       fizzBuzzArray.push(`${ i } buzz`)
//     }
//   }
// }

// const render = function () {
//   document.querySelector('.info ul').innerHTML = ''
//   fizzBuzzArray.forEach((item) => {
//     const li = document.createElement('li')
//     li.textContent = item
//     document.querySelector('.info ul').appendChild(li)
//   })
// }

// fizzBuzz(50)
// render()

// const stringReverse = 'Chris'

// const reverseString = function (theString) {
//   let newString = ''
//   for (let count = theString.length - 1; count >= 0; count--) {
//     newString += theString[count]
//   }
//   return newString
// }
// console.log(reverseString(stringReverse))


// const createPerson = (name, age, location) => {
//   return {
//     personInfo: () => `${ name } is ${ age } and lives in ${ location }.Isn't that kewl?`,
//     personGreet: () => `Hello, my name is ${name}`,
//     personLocation: () => `Yeah, I live in ${location}`,
//     personAge: () => `Oh, I am only ${age}`
//   }
// }

// const render = function (person) {
//   const info = document.querySelector('.info')
//   info.innerHTML = person.personInfo()
// }

// const chris = createPerson('Chris', 49, 'New Bern, NC')
// render(chris)

// chris.personsInfo()
// console.log(chris.name, chris.age, chris.location)


// const pal2 = (str) => {
  //   str = str.replace(/\s+/g, '')
  //   const revstr = str.split('').reverse().join('')
  //   console.log(revstr)
//   if (str === revstr) {
//     console.log('is a palndrom')
//   } else {
//     console.log('is not a paln')
//   }
// }

// pal2('a man a plan a canal panama')


// const reverseStr = (str) => {
//   let newStr = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   return newStr
// }

// const reverseStr2 = (str) => {
//   return str.split('').reverse().join('')
// }

// const pal = (str) => {
//   let newStr = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   if (str === newStr) {
//     console.log(`${str} is a palindome`)
//   } else {
//     console.log('this is not a palindome')
//   }
// }


// pal2('a man a plan a canal panama')
// console.log(reverseStr('a man a plan a canal panama'))
// console.log(reverseStr2('hello'))


// const array = [{ value: 42 }, { value: 22 }, { value: 12 }]
// const report = array
//   .map(({ value }) => value)
//   .filter(value => value < 25)
//   .map(value => `Value is: ${value}`)
//   .join('\n')
// console.log(report)

// const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat']
// const mammals = [...animals.slice(1, 4)]

// console.log(mammals)


// const vals = [5, 4, 1, 2, 9]
// let html = [{ `ages: {`]
// const sum = vals.reduce((ret, val) => {
//   html.push(`age: ${val}`)

//   return html += `}}`

// }, {})
// console.log(sum)
// console.log(sum[2])







// import fs from 'fs'

// const output = fs.readFileSync('./src/scripts/data.txt', 'utf8')
//   .trim()
//   .split('\r\n')
//   .map(line => line.split('\t'))
//   .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]] || []
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quality: line[3]
//     })
//     return customers
//   }, {})

// const customerOrders = JSON.stringify(output, null, 2)
// console.log(output)
// console.log(customerOrders)









// const animals = [
//   { name: 'Fluffykins', species: 'rabbit' },
//   { name: 'Caro', species: 'dog' },
//   { name: 'Hamilton', species: 'dog' },
//   { name: 'Harold', species: 'fish' },
//   { name: 'Ursula', species: 'cat' },
//   { name: 'Jimmy', species: 'fish' }
// ]

// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ]

// const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
// let totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount
// }

// console.log(totalAmount)