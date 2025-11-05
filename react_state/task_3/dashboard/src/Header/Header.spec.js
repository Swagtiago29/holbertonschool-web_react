import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header";
import Context from '../Context/context';

describe('Tests for Header Component', () => {

    test('renders h1 "School Dashboard"', () => {
        render(<Header />)

        const h1Element = screen.getByRole('heading', {
            level: 1,
            name: /school dashboard/i,
        })

        expect(h1Element).toBeInTheDocument()
    })

    test('renders image with correct alt', () => {
        render(<Header />)

        const imgElement = screen.getByAltText(/holberton logo/i)
        expect(imgElement).toBeInTheDocument()
    })

    test('should first', () => { second })
})