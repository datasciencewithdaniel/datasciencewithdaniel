
import BlogCard from './blogCard'


export default function BlogPresenter({ postObjs }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {postObjs.map((post, index) => (
                <div key={index} 
                className=' overflow-hidden cursor-pointer h-full rounded-lg  border-gray-600 border-2 hover:bg-gray-400 ' >
                    <div>
                        <BlogCard postObj={post} key={index} />
                    </div>
                </div>
            ))}
        </div>
    )
}
