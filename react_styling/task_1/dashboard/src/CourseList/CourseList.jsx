import React from 'react'
import CourseListRow from './CourseListRow'

function CourseList({ courses = [] }) {
    return (
        <div className='w-[80%] md:w-[90%] mx-auto my-8'>
            <table id='CourseList' className='w-full'>
                {courses.length === 0 ? null :
                    <thead>
                        <CourseListRow isHeader={true} textFirstCell='Available courses' />
                        <CourseListRow isHeader={true} textFirstCell='Course Name' textSecondCell='Credit' />
                    </thead>}

                <tbody>
                    {courses.length === 0 ? (
                        <CourseListRow isHeader={true} textFirstCell='No course available yet' />
                    ) : (
                        courses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                isHeader={false}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CourseList