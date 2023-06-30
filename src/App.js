import './App.css';
import GoalList from "./components/GoalList/GoalList";
import React, {useState} from "react";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
    const courseGoals = [
        {id: 1, text: 'Finish Course'},
        {id: 2, text: 'Learn About MongoDb'},
        {id: 3, text: 'Learn About ExpressJs'},
        {id: 4, text: 'Learn About React'},
        {id: 5, text: 'Learn About Node'}
    ]

    const [goals, setGoals] = useState(courseGoals)

    const addNewGoalHandler = (newGoal) => {
        setGoals((prevState) => [...prevState, newGoal])
    }

    return (
        <div className='course-goals'>
            <h2>Course Goals</h2>
            <NewGoal onAddGoal={addNewGoalHandler}/>
            <GoalList goals={goals}/>
        </div>
    );
}

export default App;
