import './App.css';
import GoalList from "./components/GoalList/GoalList";
import React from "react";

function App() {
    const courseGoals = [
        {id: 1, text: 'Finish Course'},
        {id: 2, text: 'Learn About MongoDb'},
        {id: 3, text: 'Learn About ExpressJs'},
        {id: 4, text: 'Learn About React'},
        {id: 5, text: 'Learn About Node'}
    ]

    return (
        <div className='course-goals'>
            <h2>Course Goals</h2>
            <GoalList goals={courseGoals}/>
        </div>
    );
}

export default App;
