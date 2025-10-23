import React from 'react'
import './BodySectionWithMarginBottom.css'
import BodySection from '../BodySection/BodySection'

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className='bodySectionWithMargin' data-testid='body-section-with-margin'>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    )
}

export default BodySectionWithMarginBottom