import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseList from './CourseList'

describe('Tests for Course List component', () => {

    test('when courses is empty it should render a row with text "No course available yet"', () => {
        render(<CourseList courses={[]} />)

        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(3)

        const bodyRow = screen.getByText(/no course available yet/i)
        expect(bodyRow).toBeInTheDocument()
    })

    test('renders 5 different rows when it receives a list of courses', () => {
        const propCourses = [
            { id: 1, name: 'course1', credit: '10' },
            { id: 2, name: 'course2', credit: '20' },
            { id: 3, name: 'course3', credit: '30' }
        ]
        render(<CourseList courses={propCourses} />)

        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(5)
    })
})