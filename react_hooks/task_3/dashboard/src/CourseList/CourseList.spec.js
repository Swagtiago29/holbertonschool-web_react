import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseList from './CourseList'

describe('Tests for Course List component', () => {

    test('renders a row with text "No course available yet" when courses is empty', () => {
        render(<CourseList courses={[]} />)
        const rows = screen.getAllByRole('row')
        expect(rows).toHaveLength(1) // only the placeholder row
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