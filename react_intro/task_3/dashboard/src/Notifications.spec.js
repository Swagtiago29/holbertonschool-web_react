import { render, screen } from "@testing-library/react";
import Notifications from "../../../task_3/dashboard/src/Notifications";
import '@testing-library/jest-dom'

describe('Notifications Test', () => {
    
    test('inner p renders correctly', () => {
        render(<Notifications />)
        const pInner = screen.getByText('Here is the list of notifications')
        expect(pInner).toBeInTheDocument()
    })

    test('button correctly renders', () => {
        render(<Notifications />)
        const Notifbutton = screen.getByRole('button')
        expect(Notifbutton).toBeInTheDocument()
     })

     test('list elements render correctly', () => {
        render(<Notifications />)
        const listElements = screen.getAllByRole('listitem')
        expect(listElements.length).toBe(3)
      })
})