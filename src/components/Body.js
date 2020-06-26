import React, { Component } from 'react'
import AboutMe from './body_components/AboutMe'
import Hobbies from './body_components/Hobbies'
import Projects from './body_components/Projects'
import { Link } from 'react-router-dom'

const Body = () => {
    return (
        <React.Fragment>
            <AboutMe />
            <Hobbies />
            {/* <Projects /> */}
            <TestProjects />
        </React.Fragment>
    )
}

function TestProjects() {
    return (
        <section className="project_body">
            <h1>Projects</h1>
            <ProjectsList />
        </section>
    )
}

function ProjectsList() {
    return (
        <div className="list_projects">
            <ProjectItem name="WhatsCookn" src={require("../assets/images/whatscookn.png")} id="whatscookn" />
            <ProjectItem name="BayanihanPH" src={require("../assets/images/bayanihanph.png")} id="bayanihanph" />
            <ProjectItem name="Covid19-Tracker" src={require("../assets/images/covidtracker.png")} id="covidtracker" />
            <ProjectItem name="NeedL" src={require("../assets/images/needl.png")} id="needl" />
            <ProjectItem name="Travel Design" src={require("../assets/images/uichallenge.png")} id="traveldesign" />
        </div>
    )
}

function ProjectItem(props) {
    let { name, src, id } = props
    return (
        <Link to={`/project/${id}`} className="link">
            <div className="project_object">
                <div className={`project_image ${id}`}>
                    <img src={src} alt="project_image" />
                </div>
                <div className="project_label">{name}</div>
            </div>
        </Link>
    )
}

export default Body