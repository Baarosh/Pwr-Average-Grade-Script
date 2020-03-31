const semesters = document.querySelectorAll('.semester')
const validSemesters = []
let gradeSum = 0
let ectsSum = 0

semesters.forEach(semester => {
  const firstRow = semester.querySelector('tr')
  const firstRowData = firstRow.querySelectorAll('td')
  if (firstRowData[5].innerText !== '---' && validSemesters.length < 2) {
    validSemesters.push(semester)
  }
})

validSemesters.forEach(semester => {
  const rows = semester.querySelectorAll('tr')
  rows.forEach(row => {
    const rowData = row.querySelectorAll('td')
    gradeSum +=
      parseFloat(rowData[5].innerText) * parseFloat(rowData[7].innerText)
    ectsSum += parseFloat(rowData[7].innerText)
  })
})

console.log('---Weighted grade average from two last semesters---')
console.log(`Total sum of weighted grades (grade*ECTS) : ${gradeSum}`)
console.log(`Total sum of ECTS : ${ectsSum}`)
console.log(`Weighted grade average : ${gradeSum / ectsSum}`)
