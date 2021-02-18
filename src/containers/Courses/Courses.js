import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import Course from '../Course/Course';

import './Courses.css';

const courses = props => {
    const coursesList = [
        { id: 1, title: 'Angular - The Complete Guide' },
        { id: 2, title: 'Vue - The Complete Guide' },
        { id: 3, title: 'PWA - The Complete Guide' }
    ];

    return (
      <div>
          <h1>Amazing Udemy Courses</h1>
          <section className="Courses">
              {
                  coursesList.map( course => {
                      return (
                        <Link
                          to={{
                            pathname: `/courses/${course.id}`,
                            search: `&title=${course.title}`
                          }}
                          key={course.id}
                          id={course.id}>
                          {/* <Course className="Course">{course.title}</Course>; */}
                          {course.title}
                        </Link>
                      );
                  } )
              }
          </section>
      </div>
    );
}

export default courses;
