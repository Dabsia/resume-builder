import React, { useState } from 'react'
import Resume from './Pages/Resume/Resume'
import { Routes, Route } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Home from './Pages/Home/Home'

const App = () => {
  const [loading, setLoading] = useState(false)

  const downloadPDF = () => {
    const capture = document.querySelector('.resumeContainer')
    setLoading(true)
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      setLoading(false)
      doc.save('resume.pdf')
    })
  }



  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='resume' element={<Resume downloadPDF={downloadPDF} loading={loading} />} />

    </Routes>
  )
}

export default App
