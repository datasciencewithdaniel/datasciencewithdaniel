import Link from 'next/link'
import ProjectsCard from './ProjectsCard'


const Projects = () => {
    return (


        <div className="grid grid-col-1 lg:grid-cols-3 gap-4 m-4 w-10/12 mx-auto py-8 ">

            <ProjectsCard
                name="website"
                body=" We  create open source projects that anyone can contribute to, helping people to take the leap in starting to code in a collaborative environment."
                linktext="These projects are often to support the community, or to take an idea and create something that others can find value in. "
                linkPath="https://github.com/datasciencewithdaniel/datasciencewithdaniel"
            />
            <ProjectsCard
                name="beluga"
                body="We support anyone on their Data Science journey by providing an environment where they can ask questions, find answers and connect with others."
                linktext="Join the Discord server to connect with the others or catch the streams on Twitch to be part of sharing knowledge amongst the community."
                linkPath="https://github.com/datasciencewithdaniel/beluga"
            />
            <ProjectsCard
                name="penguin"
                body="We help anyone to learn through \n, which is the newline character. This reflects the beginning of something new for those who are just getting started, a place where anything is possible."
                linktext=" You will always be writing a new line of code as you learn and develop new skills."
                linkPath="https://github.com/datasciencewithdaniel/penguin"
            />
            <ProjectsCard
                name="aotidae"
                body="We help anyone to learn through \n, which is the newline character. This reflects the beginning of something new for those who are just getting started, a place where anything is possible."
                linktext=" You will always be writing a new line of code as you learn and develop new skills."
                linkPath="https://github.com/datasciencewithdaniel/aotidae"
            />
        </div>

    )
}

export default Projects
