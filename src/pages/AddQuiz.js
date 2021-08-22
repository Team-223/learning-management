import React from 'react'
import styles from './AddQuiz.module.css'

function AddQuiz() {
    let form = FormApp.create('New Form');
    let multiQuestion = form.addMultipleChoiceItem();
    multiQuestion.setTitle("How many fingers do I have?")
    .setChoiceValues(['one', 'three', 'five', 'ten'])
    return (
        <div className={styles.quiz__container}>
            Quiz Test
            <input type='button' value='Close'
            onClick='google.script.host.close()'/>
        </div>
    )
}

export default AddQuiz
