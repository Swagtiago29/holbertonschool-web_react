import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseListRow from './CourseListRow'

describe('Tests for Course List Row Component', () => {

    test('when isHeader is true and textSecondCell is not null it should render two <th> elements', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow isHeader={true} textFirstCell='fornite' textSecondCell='victory royale' />
                </tbody>
            </table>)

        const headerCells = screen.getAllByRole('columnheader')

        expect(headerCells).toHaveLength(2)
        expect(headerCells[0]).toHaveTextContent(/fornite/i)
        expect(headerCells[1]).toHaveTextContent(/victory royale/i)
    })

    test('when isHeader is true and textSecondCell is null it should render one <th> element with colspan=2', () => {
        render(<table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell='testingUwU' textSecondCell={null} />
            </tbody>
        </table>)

        const headerCell = screen.getByRole('columnheader')

        expect(headerCell).toBeInTheDocument()
        expect(headerCell).toHaveAttribute('colspan', '2')
        expect(headerCell).toHaveTextContent(/testinguwu/i)
    })

    test('when isHeader is false it renders two <td> elements inside a <tr> element', () => {
        render(<table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell='last test' textSecondCell='last test 2' />
            </tbody>
        </table>)

        const row = screen.getByRole('row')
        const cells = within(row).getAllByRole('cell')

        expect(cells).toHaveLength(2)
        expect(cells[0]).toHaveTextContent(/last test/i)
        expect(cells[1]).toHaveTextContent(/last test 2/i)
    })
})