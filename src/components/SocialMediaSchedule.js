import React from 'react'
import { BentoElement, Text, Image } from './styled'
import schedule from '../assets/images/illustration-schedule-posts.webp'

const SocialMediaSchedule = () => {
    return (
        <BentoElement className='c' background='lightPurple'>
            <Text color='black' size='25px' fontWeight='500'>Schedule to social media.</Text>
            <Image src={schedule} alt='schedule posts' position='relative'/>
            <Text color='black' size='20px' fontWeight='500'>
            Optimize post timings to publish content at the perfect time for your audience
            </Text>
        </BentoElement>
    )
}

export default SocialMediaSchedule