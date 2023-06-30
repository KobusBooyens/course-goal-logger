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
        <div className='container'>
            <form onSubmit={onAddGoalHandler} className='row g-3'>
                <div>
                    <div className='col'>
                        <input type="text"
                               className="form-control"
                               required
                               value={enteredGoal}
                               onChange={onChangeHandler}
                               placeholder='Enter goal'/>
                    </div>
                    <div className='col m-md-3'>
                        <button type='submit'
                                className='btn btn-primary'
                        >Add Goal
                        </button>
                    </div>
                </div>
            </form>
        </div>


    )
}
export default NewGoal
