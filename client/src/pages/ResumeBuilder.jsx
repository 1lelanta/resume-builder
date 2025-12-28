import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, FileText, FolderIcon, GraduationCap, Sparkle, Sparkles, User } from 'lucide-react'

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

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    {id:"personal", name:"personal Info", icon:User},
    {id: "summary", name: "summery", icon: FileText},
    {id:"exprience", name:"Experience", icon:Briefcase},
    {id:"education", name:"Education", icon:GraduationCap},
    {id:"projects", name:"projects", icon: FolderIcon},
    {id:"skills", name: "Skills", icon:Sparkle}
  ]

  const activeSection = sections[activeSectionIndex]

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <Link to={'/app'}  className='inline-flex gap-2 items-center text-slate-500
        hover:text-slate-700 transition-all'>
          <ArrowLeftIcon className='size-4'/>
          Back to Dashboard
        </Link>
      </div>
      <div className='max-w-7xl mx-auto px-4 pb-8'>
        <div className='grid lg:grid-cols-12 gap-8'>
          {/* left panel  */}
          <div></div>
          {/* right panel */}
          <div></div>
        </div>

      </div>
    </div>
  )
}

export default ResumeBuilder