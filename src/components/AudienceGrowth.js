import React from 'react'
import { BentoElement, Text, Image } from './styled'
import audience from '../assets/images/illustration-audience-growth.webp'

const AudienceGrowth = () => {
    return (
        <BentoElement background='white' className='g'>
            <Text color='black' size='60px' fontWeight='700' text='left'>56%</Text>
            <Text color='black' size='20px' fontWeight='400' text='left'>faster audience growth</Text>
            <Image src={audience} alt='social media' width='60' align='center'/>
        </BentoElement>
    )
}

export default AudienceGrowth