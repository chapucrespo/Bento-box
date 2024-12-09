import React from 'react'
import { BentoElement, Text, Image } from './styled'
import fiveStars from '../assets/images/illustration-five-stars.webp'

const index = () => {
    return (
        <BentoElement className='b' background='darkPurple'>
            <Text text='center' size='40px' fontWeight='500' color='white'>Social Media 10x <span>Faster</span> with AI</Text>
            <Image src={fiveStars} alt='five stars' width='80'/>
            <Text color='white' size='20px'>Over 4000 5-stars reviews</Text>
        </BentoElement>
    )
}

export default index