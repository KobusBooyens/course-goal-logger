import React from 'react'
import './NewGoal.css'

const NewGoal = (props) => {
    const onAddGoalHandler = (e) => {
        e.preventDefault()
        const newGoal = {
            id: Math.random().toString(),
            text: 'This is a new goal'
        }
        props.onAddGoal(newGoal)
    }

    return (
        <form className='form-goal' onSubmit={onAddGoalHandler}>
            <input type="text"
                   className="form-input"
                   placeholder='Enter goal'/>
            <button type='submit'
                    className='btn btn-primary'
            >Add Goal
            </button>
        </form>
    )
}
export default NewGoal
