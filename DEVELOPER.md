# Developer Guide

Thank you for choosing to contribute to the Data Science with Daniel site. The site uses React and Next.js to build the site, and a Docker environment has been specified to help do this. To access the source code, clone the repository using Git as follows:

```
git clone https://github.com/datasciencewithdaniel/datasciencewithdaniel.git
```

Once you have installed Docker on your system, run the following command to build the image from the root directory of the repository:

```
docker build -t datasciencewithdaniel .
```

Once the image has been built (remembering that future changes may require additonal builds), you can run the following command from the root directory of the repository to access a bash terminal for development:

```
docker-compose run --rm --service-ports datasciencewithdaniel /bin/bash
```

Once inside the container, install the npm packages as this is currently not working through Docker by running:

```
npm install package.json
```

Any changes made from the local files will be reflected in the Docker server which can be started from within the Docker prompt using:

```
npm run start
```

This server can be stopped with ```Control-C``` and the Docker container can be stopped using ```exit```

If this is being deployed ```prod``` or simply submitted to ```main```, ensure that ```npm run build``` succeeds beforehand!

## Contribution Guidelines

1. Please raise a Pull Request into the main branch for testing before being deployed to the live site
2. Link any relevant issues in your Pull Request, or comment in the Issue to allow for tracking of progress
