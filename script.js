const semesters = document.querySelectorAll('.semester')
let validSemesters = 0

semesters.forEach(semester => {
  const row = semester.querySelector('tr')
  const grades = row.querySelectorAll('td')
  if (!grades[5].innerText === '---') {
    validSemesters += 1
    semesters
  }
})
const row = semester.querySelector('tr')
console.log(row)
const grades = row.querySelectorAll('td')
console.log(grades)

console.log(grades[5].innerText)
console.log(grades[7].innerText)
