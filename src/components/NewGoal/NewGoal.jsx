import React, {useState} from 'react'
import './NewGoal.css'

const NewGoal = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')
    const onAddGoalHandler = (e) => {
        e.preventDefault()
        const newGoal = {
            id: Math.random().toString(),
            text: enteredGoal
        }
        props.onAddGoal(newGoal)
        setEnteredGoal('')
    }

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setEnteredGoal(e.target.value)
    }

    return (
        <form className='form-goal'
              onSubmit={onAddGoalHandler}>
            <input type="text"
                   className="form-input"
                   required
                   value={enteredGoal}
                   onChange={onChangeHandler}
                   placeholder='Enter goal'/>
            <button type='submit'
                    className='btn btn-primary'
            >Add Goal
            </button>
        </form>
    )
}
export default NewGoal
