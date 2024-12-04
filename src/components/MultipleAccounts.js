import React from 'react'
import { BentoElement, Text, Image } from './styled'
import platforms from '../assets/images/illustration-multiple-platforms.webp'

const MultipleAccounts = () => {
    return (
        <BentoElement background='white' className='d'>
            <Image src={platforms} alt='social media' position='relative' style={{left: '40px'}} width='100'/>
            <Text color='black' fontWeight='400' size='25px' textAlign='left'>Manage multiple accounts and platforms</Text>
        </BentoElement>
    )
}

export default MultipleAccounts