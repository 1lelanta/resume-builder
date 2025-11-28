import React from 'react'
import { BookUserIcon } from 'lucide-react'

const Testimonial = () => {
  return (
    <div id='features' className='flex flex-col items-center my-10
    scroll-mt-12'>
        <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-200/10 rounded-full px-6 py-1.5">
            <BookUserIcon className='size-4.5 stroke-blue-700'/>
            <span>Testimonials</span>

        </div>

        <Title title='Just take your time' description=
        'Hear what our distinguished users say about us. just tell us what improve, leave a review'/>
    </div>
  )
}

export default Testimonial