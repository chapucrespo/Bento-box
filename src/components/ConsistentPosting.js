import React from 'react'
import { BentoElement, Text, Image } from './styled'
import consistent from '../assets/images/illustration-consistent-schedule.webp'

const ConsistentPosting = () => {
    return (
        <BentoElement background='darkYellow' className='e'>
            <Text color='black' big size='25px' textAlign='left' fontWeight='500'>Maintain a consistent posting schedule</Text>
            <Image src={consistent} alt='social media' position='relative' width='50' alignSelf='self-start'/>
        </BentoElement>
    )
}

export default ConsistentPosting