import React, { useState } from "react";
import questions from "../../Assits/questions";
import QuizCompCss from "./quizComp.module.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function QuizComp({ quesNum, setQuesNum }) {
    const [cond, setCond] = useState(false)
    const [answerCond, setAnswerCond] = useState(false)
    const [count, setCount] = useState(0)
    const options = [...questions[quesNum].incorrect_answers, questions[quesNum].correct_answer]

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function evaluate(index) {
        if (options[index] == questions[quesNum].correct_answer) {
            setAnswerCond(true)
            setCount(count + 1)
        }
        setCond(true)
    }

    function nextBtn() {
        setQuesNum(quesNum + 1);
        setCond(false);
        setAnswerCond(false)
    }

    shuffle(options)
    return (
        <>
            {quesNum < questions.length - 1 ?
                <>
                    <h1>
                        Question {quesNum + 1} of {questions.length}
                    </h1>
                    <div>
                        <h4>
                            {questions[quesNum].category}
                        </h4>
                    </div>
                    <div>
                        {questions[quesNum].difficulty == "easy" ?
                            <>
                                <StarIcon />
                                <StarBorderIcon />
                                <StarBorderIcon />
                            </>
                            : null
                        }
                        {questions[quesNum].difficulty == "medium" ?
                            <>
                                <StarIcon />
                                <StarIcon />
                                <StarBorderIcon />
                            </>
                            : null
                        }
                        {questions[quesNum].difficulty == "hard" ?
                            <>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </>
                            : null
                        }
                    </div>
                    <h2>
                        {questions[quesNum].question}
                    </h2>
                    <div className={QuizCompCss.btnDiv}>
                        <div>
                            {options.map((v, i) => {
                                return (
                                    <button onClick={() => evaluate(i)} key={i} disabled={cond ? "disabled" : null} className={cond && v == questions[quesNum].correct_answer ? QuizCompCss.highlighted : null}>
                                        {v}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {cond ?
                        <div className={QuizCompCss.resultDiv}>
                            {answerCond ?
                                <h3>
                                    Correct.
                                </h3> : null
                            }
                            {!answerCond ?
                                <h3>
                                    Sorry!
                                </h3> : null
                            }
                            <div>
                                <button onClick={() => nextBtn()}>
                                    Next Question
                                </button>
                            </div>
                        </div> : null
                    }
                </> : <>
                    <h1>
                        You Have Scored {count} out of {questions.length}
                    </h1>
                </>
            }



        </>
    )
}

export default QuizComp;