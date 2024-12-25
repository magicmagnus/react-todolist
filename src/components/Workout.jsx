import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {

    const { workout } = props
    return (
        <SectionWrapper key={1} id={'workout'} header={'Welcome to'} title={["the", "Danger", "zone", "work", "out"]}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, index) => {
                    return (
                        <ExerciseCard key={index} exercise={exercise} index={index}/>
                    )
                } )}
            </div>
        </SectionWrapper>
    )
}
