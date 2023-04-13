import React from 'react';

const QuizeOptions = ({option,chekQuiz}) => {
    return (
        <div className=' text-center p-2'>
                <input onClick={()=> chekQuiz(option.quistion)} type="radio" id={option.id} name='a' className=' radio-sm me-3'/>
                <label For={option.id}>{option.quistion}</label>
        </div>
    );
};

export default QuizeOptions;