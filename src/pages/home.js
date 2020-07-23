import React, { useState } from 'react';

import dayjs from '../util/day';


import WorkoutView from '../components/workouts/WorkoutView';




const Home = () => {
    const [day, setDay] = useState(dayjs());




    return (
        <WorkoutView day={day} setDay={setDay} />

    )
}

export default Home;
