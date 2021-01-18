import React from 'react'

const ResumeInfoList = ({organization, title, startDate, endDate, description}) => {
    return (
        <li>
            <div className="content-text">
                <h3 className="line-title">{title} - {organization}</h3>
                <span>{startDate} - {endDate}</span>
                <p className="line-text">{description}</p>
            </div>
        </li>
    )
}

export default ResumeInfoList
