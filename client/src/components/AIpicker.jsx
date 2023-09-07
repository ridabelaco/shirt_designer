import React from 'react';

import CustomButton from './CustomButton';

const AIpicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
    return (
        <div className='aipicker-container'>
            <textarea
                rows="4"
                cols="50"
                value="Only available for paid members of OpenAI"
                readOnly
                className='aipicker-textarea'
            />
        </div>
    )
}

export default AIpicker
