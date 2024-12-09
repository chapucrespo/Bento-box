import React from 'react'
import { BentoElement, Text, Image } from './styled'
import consistent from '../assets/images/illustration-consistent-schedule.webp'

const ConsistentPosting = () => {
    return (
        <BentoElement background='darkYellow' className='e'>
            <Text color='black' size='25px' text='left' fontWeight='500'>Maintain a consistent posting schedule</Text>
            <Image src={consistent} alt='social media' position='relative' width='50' align='self-start'/>
        </BentoElement>
    )
}

export default ConsistentPosting