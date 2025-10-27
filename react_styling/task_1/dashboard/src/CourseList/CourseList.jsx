import React from 'react';
import CourseListRow from './CourseListRow';

function CourseList({ courses = [] }) {
  return (
    <div className="w-[85%] mx-auto my-8 overflow-x-auto">
      <table id="CourseList" className="w-full border-collapse">
        <thead>
          {courses.length === 0 ? (
            <CourseListRow
              isHeader={true}
              textFirstCell="No course available yet"
            />
          ) : (
            <>
              <CourseListRow
                isHeader={true}
                textFirstCell="Available courses"
              />
              <CourseListRow
                isHeader={true}
                textFirstCell="Course Name"
                textSecondCell="Credit"
              />
            </>
          )}
        </thead>

        {courses.length > 0 && (
          <tbody>
            {courses.map((course) => (
              <CourseListRow
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default CourseList;
