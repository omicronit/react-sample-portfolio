import React from 'react'
import { EDUCATION_INFO, EXPERIENCE_INFO } from '../data/dummy-data'
import ResumeInfoList from './ResumeInfoList'

const ResumeComponent = () => {

    const educationInfoList = EDUCATION_INFO.map((info, index) => <ResumeInfoList key={index} organization={info.organization} title={info.certificate} startDate={info.startYear} endDate={info.endYear} description={info.description} />)

    const experienceInfoList = EXPERIENCE_INFO.map((info, index) => <ResumeInfoList key={index} organization={info.organization} title={info.designation} startDate={info.startDate} endDate={info.endDate} description={info.description} />)

    return (
        <div id="resume" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="education wow fadeInRight" data-wow-delay="0.3s">
              <ul className="timeline">
                <li>
                  <i className="icon-graduation"></i>
                  <h2 className="timelin-title">Education</h2>
                </li>
                {educationInfoList.length > 0 ? educationInfoList: ''}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="experience wow fadeInRight" data-wow-delay="0.6s">
              <ul className="timeline">
                <li>
                  <i className="icon-briefcase"></i>
                  <h2 className="timelin-title">Experience</h2>
                </li>
                {experienceInfoList.length > 0 ? experienceInfoList: ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ResumeComponent
