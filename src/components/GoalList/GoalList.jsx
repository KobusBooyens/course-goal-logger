import React from 'react'
import './GoalList.css'

const GoalList = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3>My Goals</h3>
            </div>
            <div className='card-body'>
                <ul className='list-group list-group-flush'>
                    {props.goals.map((goal) =>
                        <li key={goal.id}
                            className='list-group-item'>
                            {goal.text}
                        </li>)}
                </ul>
            </div>

        </div>

    )
}

export default GoalList
