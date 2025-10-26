import React from 'react'
import BodySection from '../BodySection/BodySection'

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className='bodySectionWithMargin mb-40 max-[912px]:ml-2 max-[912px]:mr-2' data-testid='body-section-with-margin'>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    )
}

export default BodySectionWithMarginBottom