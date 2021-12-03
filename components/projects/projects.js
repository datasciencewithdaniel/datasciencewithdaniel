import Link from 'next/link'
import ProjectsCard from './ProjectsCard'


const Projects = () => {
    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4 m-4 w-10/12 mx-auto py-8 ">

            <ProjectsCard
                name="website"
                body="A static website built using React that serves as the landing page for all Data Science with Daniel activities and initiatives"
                linkPath="https://github.com/datasciencewithdaniel/datasciencewithdaniel"
            />
            <ProjectsCard
                name="beluga"
                body={"Beluga is a Python library that provides easy access to all of the metrics you need in your classification tasks. We were inspired by a friendly Beluga whale to help others in their Machine Learning projects."}
                linkPath="https://github.com/datasciencewithdaniel/beluga"
            />
            <ProjectsCard
                name="penguin"
                body="A Discord bot built using Python that helps manage the Data Science with Daniel community such as organising the tutoring service to match tutors with those looking for help"
                linkPath="https://github.com/datasciencewithdaniel/penguin"
            />
            <ProjectsCard
                name="aotidae"
                body="A project that ingests space data from the Sentinel-2 satelite to identify the prevalence of cloud cover. This analysis seeks to input a location and a time period and output the usability of the images."
                linkPath="https://github.com/datasciencewithdaniel/aotidae"
            />
        </div>

    )
}

export default Projects
