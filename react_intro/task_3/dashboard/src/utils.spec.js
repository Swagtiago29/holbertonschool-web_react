import { render, screen } from "@testing-library/react";
import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";
import '@testing-library/jest-dom'

describe('utils tests', () => {
    test('should return current year', () => {
        const CurrentYear = new Date().getFullYear()
        expect(getCurrentYear()).toBe(CurrentYear)
    })

    test('should return correct string', () => {
        expect(getFooterCopy(true)).toBe('Holberton School')
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
    })

    test('should return HTMLstring', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
    })
})