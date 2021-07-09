import { promises as fs } from 'fs'
import path from 'path'

import { Container}  from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import Footer from '../components/footer';
import SingleCard from '../components/card'

import styles from '../styles/Home.module.css'

const Streaming = ({ streams }) => {

    return (<>
		<NavPlus></NavPlus>

        <PageHeader pageTitle="Streaming">
        </PageHeader>

        <Container>
            
            <CardColumns>
                {streams.map((stream) => (
				<SingleCard
					cardTitle="Stream Recording"
					cardText={"Date: ".concat(stream.filename.slice(0, 10))}
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink={"localhost:3000/assets/vod/".concat(stream.filename)} // FIX LINK TO S3
					linkText="Click for video download"
				></SingleCard>
                
                ))}

            </CardColumns>
        </Container>

        <Footer></Footer>
    </>)
}



export async function getStaticProps(context) {
    const streamsDirectory = path.join(process.cwd(), 'assets/vod')
    const filenames = await fs.readdir(streamsDirectory)

    const streams = filenames.map(async (filename) => {
        const filePath = path.join(streamsDirectory, filename)
        // const fileContents = await fs.readFile(filePath, 'utf8')
    
        return {
            filename,
        //   content: fileContents,
        }
    })

    return {
        props: {
            streams: await Promise.all(streams),
        },
    }
}











// // This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://www.datasciencewithdaniel.com.au/images')
//     const streams = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = streams.map((stream) => ({
//       params: { id: stream.id },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }
  
//   // This also gets called at build time
//   export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://www.datasciencewithdaniel.com.au/images/${params.id}`)
//     const stream = await res.json()
  
//     // Pass post data to the page via props
//     return { props: { stream } }
//   }

















// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// export async function getStaticProps() {
//     const streamsDirectory = path.join(process.cwd(), 'public/test')
//     const filenames = await fs.readdir(streamsDirectory)
  
//     const streams = filenames.map(async (filename) => {
//       const filePath = path.join(streamsDirectory, filename)
//       const fileContents = await fs.readFile(filePath, 'utf8')
  
//       // Generally you would parse/transform the contents
//       // For example you can transform markdown to HTML here
  
//       return {
//         filename,
//         content: fileContents,
//       }
//     })
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts: await Promise.all(streams),
//       },
//     }
//   }




  
// function Streaming({ streams }) {
//     return (
//         <ul>
//             {streams.map((stream) => (
//                 <li>{stream.title}</li>
//             ))}
//         </ul>
//     )
// }

// This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://.../streams')
//     const streams = await res.json()
    
//     // Get the paths we want to pre-render based on posts
//     const paths = streams.map((stream) => ({
//         params: { id: stream.id },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

// // This function gets called at build time
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://.../streams/{params.id}')
//     const streams = await res.json()

//     // if (!streams) {
//     //     return {
//     //         redirect: {
//     //             destination: '/',
//     //             permanent: false,
//     //         }
//     //     }
//     // }
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             streams,
//         },
//     }
// }
  
export default Streaming
