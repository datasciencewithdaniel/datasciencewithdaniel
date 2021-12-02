import Link from 'next/link'


const ProjectsCard = ({ name, body, linkPath }) => {
    return (

        <div className=" p-4  border-2 border-gray-50 rounded-lg flex transform duration-500 ease-in-out  hover:bg-white hover:bg-opacity-10 hover:shadow-2xl flex-col">
            <p className="blueText">PROJECT</p>
            <h3 className="text-6xl text-white text-center mt-8 font-semibold mb-2">
                {name}
            </h3>
            <dd className="mb-2 h-36 border-b-2 mt-4">
                <p className="text-base text-gray-300 tracking-tight leading-normal text-justify">
                    {body}
                </p>
            </dd>
            <dt className="mb-2">
                <div className="flex ">
                    <div className="flex-grow">
                        <a target="_blank" href={linkPath} target="_blank"  >
                            <p className="blueText mt-2 text-right ">
                                GitHub Repo {'>'}
                            </p>
                        </a>
                    </div>
                </div>
            </dt>
        </div>
    )
}

export default ProjectsCard
