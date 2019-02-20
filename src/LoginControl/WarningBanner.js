import React from 'react'

const warningBanner = (props) => {
    if(!props.warn)
    {
        return null;
    }
    return (
        <div className="warning">
        Warning!
        </div>
    )
}
export default warningBanner
