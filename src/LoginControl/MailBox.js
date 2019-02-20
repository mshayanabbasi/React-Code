import React from 'react'

const mailBox = (props) => {
    const unreadmessages = props.unreadmessages
    return(
        <div>
            <h1>Hello</h1>
            {unreadmessages.length > 0 &&
            <h2>
                You have {unreadmessages.length} unread messages.
            </h2>
        }
        </div>
    )
}
export const messages = ['React', 'Re: React', 'Re:Re: React']
export default mailBox