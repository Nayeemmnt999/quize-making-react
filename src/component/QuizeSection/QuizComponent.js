import React, { useState } from 'react';
import './QuizComponent.css'
import QuizeOptions from './QuizeOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
const QuizComponent = ({ questons }) => {
    console.log(questons);
    // const {question} = questions
    const quisOption = [
        { id: 1, quistion: questons.options[0] },
        { id: 2, quistion: questons.options[1] },
        { id: 3, quistion: questons.options[2] },
        { id: 4, quistion: questons.options[3] },
    ]

    // const [quzeChek, setQuizeChek] = useState()
    let correctAns = questons.correctAnswer;
    const chekQuiz = (id) => {
        if (id === correctAns) {
            toast('Correct')
        }
        else {
            toast('not correct')
        }
    }
    const correctAnsToast = () => {
        toast(correctAns)
    }
    return (
        <div className='mian-component h-full w-1/2 text-center mx-auto '>
            <div className='border p-8 mb-10'>
                <div className='flex justify-items-center'>

                    <div className='font-bold text-lg'>
                        <h1>{questons.question}</h1>
                    </div>
                    <div>
                        <button onClick={correctAnsToast} className=' ms-3.5'>
                            <EyeIcon className="h-6 w-6 text-gray-400"></EyeIcon>
                        </button>

                    </div>
                </div>

                <div className='quize-option mt-4'>
                    {
                        quisOption.map(option => <QuizeOptions
                            key={option.id}
                            option={option}
                           
                            chekQuiz={chekQuiz}
                        ></QuizeOptions>)
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizComponent;