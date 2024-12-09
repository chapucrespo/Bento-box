import React from 'react'
import { BentoElement, Text, Image } from './styled'
import growth from '../assets/images/illustration-grow-followers.webp'

const GrowFollowers = () => {
    return (
        <BentoElement background='darkPurple' className='h'>
            <Image src={growth} alt='social media' width='70'/>
            <Text color='white' size='35px' fontWeight='700'>Grow followers with non-stop content</Text>
        </BentoElement>
    )
}

export default GrowFollowers