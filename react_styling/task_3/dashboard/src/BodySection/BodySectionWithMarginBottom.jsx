import React from 'react'
import BodySection from '../BodySection/BodySection'

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className='bodySectionWithMargin mb-9' data-testid='body-section-with-margin'>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    )
}

export default BodySectionWithMarginBottom