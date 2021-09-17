// import { promises as fs } from 'fs'
// import path from 'path'

import { Container, Row, Col }  from 'react-bootstrap';
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import SingleCard from '../components/card'

const Streaming = ({ streamsA, streamsB, streamsC }) => {

    return (<>
		<NavPlus/>

        <PageHeader pageTitle="Streaming"/>

        <Container>
            <Row>
                <Col>
                    {streamsA.map((streamA) => (
                    <SingleCard
                        cardTitle="Stream Recording"
                        cardText={streamA.name.slice(0, 10).concat(": ").concat(streamA.name.slice(11, -4))}
                        imageLink='/images/TwitchAbout_Recording.png'
                        linkLink={"/vod/".concat(streamA.name)}
                        linkText="Click for video download"
                        download={true}
                    />
                    ))}
                </Col>
                <Col>
                {streamsB.map((streamB) => (
                        <SingleCard
                            cardTitle="Stream Recording"
                            cardText={streamB.name.slice(0, 10).concat(": ").concat(streamB.name.slice(11, -4))}
                            imageLink='/images/TwitchAbout_Recording.png'
                            linkLink={"/vod/".concat(streamB.name)}
                            linkText="Click for video download"
                            download={true}
                        />
                        ))}
                </Col>
                <Col>
                {streamsC.map((streamC) => (
                        <SingleCard
                            cardTitle="Stream Recording"
                            cardText={streamC.name.slice(0, 10).concat(": ").concat(streamC.name.slice(11, -4))}
                            imageLink='/images/TwitchAbout_Recording.png'
                            linkLink={"/vod/".concat(streamC.name)}
                            linkText="Click for video download"
                            download={true}
                        />
                        ))}
                </Col>
            </Row>
        </Container>

    </>)
}


export async function getStaticProps(context) {

    // let AWS = require('aws-sdk');
    // let credentials = new AWS.SharedIniFileCredentials({profile: 'dswd'});
    // AWS.config.credentials = credentials;

    const client = new S3Client();
    const command = new ListObjectsCommand({"Bucket": "datasciencewithdaniel.com.au", "Prefix": "vod/"});
    const response = await client.send(command);

    // const streamsDirectory = path.join(process.cwd(), 'vod')
    // const filenames = await fs.readdir(streamsDirectory)
    response.Contents.shift()
    let numStreams = response.Contents.length

    const streams = response.Contents.map(async (filename) => {
        // const filePath = path.join(streamsDirectory, filename)
        // console.log(filename)
        let name = filename.Key.slice(4)

        return {
            name,
        }
    })

    return {
        props: {
            streamsA: await Promise.all(streams.slice(0, numStreams/3)),
            streamsB: await Promise.all(streams.slice(numStreams/3, numStreams/3*2)),
            streamsC: await Promise.all(streams.slice(numStreams/3*2, numStreams)),
        },
    }
}

export default Streaming
