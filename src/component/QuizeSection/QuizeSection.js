import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizComponent from './QuizComponent';

const QuizeSection = () => {
    const quizQuis = useLoaderData().data.questions ;
    return (
        <div>
            {
                quizQuis.map(question => <QuizComponent
                key={question.id}
                questons ={question}
                ></QuizComponent>)
            }
        </div>
    );
};

export default QuizeSection;