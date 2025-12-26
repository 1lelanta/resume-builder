import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'

const ResumeBuilder = () => {
  const {resumeId} = useParams()

  const [resumeData, setResumeData] = useState({
    _id:'',
    title:'',
    personal_info:{},
    proffessional_summary:"",
    experience: [],
    education:[],
    project:[],
    skills:[],
    template:"classic",
    accent_color: "#3882f6",
    public:false,
  })

  const loadExistingResume = ()=>{
    const resume = dummyResumeData.find(resume=> resume._id===resumeId)
    if(resume){
      setResumeData(resume)
      document.title = resume.title
    }
  } 

  useEffect(()=>{
    loadExistingResume()
  },[])

  return (
    <div>

    </div>
  )
}

export default ResumeBuilder