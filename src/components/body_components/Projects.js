import React from 'react'
import Flickity from 'react-flickity-component'
import '../../assets/css/flickity.css'
import {
    Link
} from "react-router-dom";


function Projects() {
    return (
        <section className="project_body" id='projects'>
            <div className='head_project'>
                <h1>Projects</h1>
            </div>
            <ProjectsList />
        </section>
    )
}

function ProjectsList() {
    return (
        <div className="list_projects">
            <ProjectItem name="WhatsCookn" src={require("../../assets/images/whatscookn.png")} id="whatscookn" />
            <ProjectItem name="BayanihanPH" src={require("../../assets/images/bayanihanph.png")} id="bayanihanph" />
            <ProjectItem name="Covid19-Tracker" src={require("../../assets/images/covidtracker.png")} id="covidtracker" />
            <ProjectItem name="Travel Design" src={require("../../assets/images/uichallenge.png")} id="traveldesign" />
            <ProjectItem name="Furniture Design" src={require("../../assets/images/furnituredesign.png")} id="furnituredesign" />
        </div>
    )
}

function ProjectItem(props) {
    let { name, src, id } = props
    return (
        <Link to={`/project/${id}`} className="link">
            <div className="project_object">
                <div className={`project_image ${id}`}>
                    <img src={src} alt="project_image" alt="Project_Image" />
                </div>
                <div className="project_label">{name}</div>
            </div>
        </Link>
    )
}


export default Projects