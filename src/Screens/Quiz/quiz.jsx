import React, { useState } from "react";
import questions from "../../Assits/questions";
import QuizCss from "./quiz.module.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import QuizComp from "../../Components/QuizComp/quizComp";

function Quiz() {
    const [quesNum, setQuesNum] = useState(0)
    let width = (quesNum + 1 / questions.length) * 100
    return (
        <>
            <div className={QuizCss.topBar} style={{ width: `${width}%` }}>

            </div>
            <div className={QuizCss.main}>
                <QuizComp quesNum={quesNum} setQuesNum={setQuesNum} />
            </div>
        </>
    )
}

export default Quiz;