import React from 'react'
import { BentoElement, Text, Image } from './styled'
import createPost from '../assets/images/illustration-create-post.webp'

const CreateContent = () => {

    return (
        <BentoElement className='a' background='lightYellow'>
            <Text color='black' fontWeight='600' size='30px' textAlign='left'>Create and schedule content <span color='darkPurple'>quicker</span></Text>
            <Image src={createPost} alt='Create a post' width='60' alignSelf='self-start'/>
        </BentoElement>
    )
}

export default CreateContent