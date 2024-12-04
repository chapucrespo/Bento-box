import React from 'react'
import { BentoElement, Text, Image } from './styled'
import aiContent from '../assets/images/illustration-ai-content.webp'

const WriteWithAI = () => {
    return (
        <BentoElement background='darkYellow' className='f'>
            <Text color='black' big size='25px'>Write your content using AI.</Text>
            <Image src={aiContent} alt='ai content'/>
        </BentoElement>
    )
}

export default WriteWithAI