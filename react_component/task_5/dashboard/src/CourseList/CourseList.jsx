import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

function CourseList({ courses = [] }) {
    return (
        <table id='CourseList'>
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
    )
}

export default CourseList