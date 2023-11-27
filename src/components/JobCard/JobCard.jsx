import dayjs from 'dayjs';
import React from 'react'
import './JobCard.css';
function JobCard(props) {
    const skills  = ["Javascript", "React", "Nodejs"];
    const date1 =  dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day')
  return (
    <div className='jobcard'>
        <div className='jobcardContainer'>
            <div className='jobcardContainer1'>
                <h1 className='jobcardContainer2'>{props.title}-{props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='jobcardContainer3'>
                    {skills.map((skill) => (
                            <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border-black'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='jobcardContainer4'>
                <p className='jobcardContainer5'>Posted  {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`}  ago</p>
              <a href={props.job_link}>
              <button className='job-btn'>Apply</button>
              </a>
            </div>
        </div>
    </div>
  )
}

export default JobCard