import React from 'react'
import { BookUserIcon } from 'lucide-react'
import Title from './Title'

const Testimonial = () => {


    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Avery Johnson',
            handle: '@averywrites',
        },
    ];
    
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