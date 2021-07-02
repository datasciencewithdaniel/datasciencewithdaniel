import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import Footer from '../components/footer';

import styles from '../styles/Home.module.css'

const Streaming = () => {

    return (<>
		<NavPlus></NavPlus>

        <PageHeader pageTitle="Streaming">
        </PageHeader>

        <Container>
            <Row>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                </ul>
            </Row>
        </Container>

        <Footer></Footer>





    </>)
}
  
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
