import { promises as fs } from 'fs'
import path from 'path'

import { Container, CardColumns}  from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import SingleCard from '../components/card'

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
					cardText={stream.filename.slice(0, 10).concat(": ").concat(stream.filename.slice(11))}
					imageLink='/images/TwitchAbout_Recording.png'
					linkLink={"/vod/".concat(stream.filename)}
					linkText="Click for video download"
				></SingleCard>
                
                ))}

            </CardColumns>
        </Container>

    </>)
}


export async function getStaticProps(context) {
    const streamsDirectory = path.join(process.cwd(), 'vod')
    const filenames = await fs.readdir(streamsDirectory)

    const streams = filenames.map(async (filename) => {
        const filePath = path.join(streamsDirectory, filename)
    
        return {
            filename,
        }
    })

    return {
        props: {
            streams: await Promise.all(streams),
        },
    }
}

export default Streaming
