// Defining variables
const semesters = document.querySelectorAll('.semester')
const validSemesters = []
let gradeSum = 0
let ectsSum = 0

// Checking if semester is completed
// and getting last two semesters
semesters.forEach(semester => {
  const firstRow = semester.querySelector('tr')
  const firstRowData = firstRow.querySelectorAll('td')
  if (firstRowData[5].innerText !== '---' && validSemesters.length < 2) {
    validSemesters.push(semester)
  }
})

// Calculating sums
validSemesters.forEach(semester => {
  const rows = semester.querySelectorAll('tr')
  rows.forEach(row => {
    const rowData = row.querySelectorAll('td')
    gradeSum +=
      parseFloat(rowData[5].innerText) * parseFloat(rowData[7].innerText)
    ectsSum += parseFloat(rowData[7].innerText)
  })
})

// Displaying results
console.log('---Weighted grade average from two last semesters---')
console.log(
  '-If you want to reuse the script, refresh the page (F5) and paste it again-'
)
console.log(`Total sum of weighted grades (grade*ECTS) : ${gradeSum}`)
console.log(`Total sum of ECTS : ${ectsSum}`)
console.log(`Weighted grade average : ${gradeSum / ectsSum}`)
