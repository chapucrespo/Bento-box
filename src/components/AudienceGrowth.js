import React from 'react'
import { BentoElement, Text, Image } from './styled'
import audience from '../assets/images/illustration-audience-growth.webp'

const AudienceGrowth = () => {
    return (
        <BentoElement background='white' className='g'>
            <Text color='black' big size='60px' fontWeight='700' textAlign='left'>56%</Text>
            <Text color='black' big size='20px' fontWeight='400' textAlign='left'>faster audience growth</Text>
            <Image src={audience} alt='social media' width='60' alignSelf='self-start'/>
        </BentoElement>
    )
}

export default AudienceGrowth