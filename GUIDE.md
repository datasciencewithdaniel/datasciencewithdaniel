Data Science with Daniel is a community, and anyone from that community can contribute and add value. To do this, this repo has been set up to allow members to submit posts and have them go live on the site. The following instructions take you through how to do this and the process of adding content.

## Installations
We are using Hexo to generate the content which is available through [node.js](https://nodejs.org/en/) which needs to be installed and then the following commands run to install Hexo. This is only required if you are using the node backend, as you can write posts without this installed to contribute to the site.

```
$ sudo npm install npm@latest -g
$ sudo npm install -g hexo-cli
```

## Local GitHub
Check to see if you have git installed, if not, install it from [here](https://git-scm.com/).

```
$ git --version
```

Sign up to GitHub and add your SSH keys to your config. To access the GitHub repo, you need to fork it on [GitHub](https://github.com/datasciencewithdaniel/datasciencewithdaniel/) at the top right, which makes a copy of it on your own account. Once it has been forked, you can create a clone on your local computer.

```
$ git clone git@github.com:datasciencewithdaniel/datasciencewithdaniel.git
$ cd datasciencewithdaniel
$ git fetch
$ git branch development origin/development
$ git remote add upstream git@github.com:datasciencewithdaniel/datasciencewithdaniel.git
```

You now have a folder called ```datasciencewithdaniel``` that contains all of the DSWD files. You also have the two branches, ```master``` and ```development``` where the work is done. These two branches are in 3 places, they are on your local machine, the ones prefixed with ```origin/``` are the forked copy on your account and the ones prefixed with ```upstream/``` are the ones on the DSWD account that are used to generate the site. This can be see by running the following.

```
$ git branch -va
```

## Latest Versions
Before starting any work, you need to ensure that you are using the latest versions of the repo. 

```
$ git fetch upstream --prune
$ git checkout development
$ git merge upstream/development
$ git push origin development
$ git checkout master
$ git merge upstream/master
$ git push origin master
```

## Make your changes
With everything up to date, you need to create a new local branch where you will do all of your work which will then be merged back into the ```development``` branch and then into the ```master``` branch to have the changes go live. The following creates your branch, and substitute ```my_branch``` for the name of your branch, something like ```dev-dc-post``` where ```dc``` are you initials (those are my initials).

```
$ git checkout development
$ git checkout -b my_branch
```

Now you can make all the changes you want. If you are writing a new post, the following creates your post, where you change ```my_post``` to the title of your post. Alternatively, make a copy in the ```_drafts``` folder of the ```draft.md``` file (located in the ```scaffolds``` folder) and use this as the template for your new post.

```
$ hexo new "my_post"
```

In this case, your post will be created as a markdown file. Simply open the file and write your post underneath the yaml header. Follow the yaml header guide to update the metadata for your post. You can use Hexo to see at what your new post will look like on the site by running the following.

```
$ hexo server --draft
```

Go to the local host link that comes up and you can see it. Note here, any other draft posts will also show up even though they have not been published to the live site yet. This is only possible if you are using the node backend.

Once you have completed all of the changes, you need to tell git which changes you want to push back to the remote repo. The following adds all changes you made, however you can substitute the dot for the file name of what you want to send back if you don't want to include everything.

```
$ git add .
$ git commit -m "<enter commit message here>"
```

## Push to remote
The next step is pushing these changes to your own repo on your account and then raising a pull request to have those changes pulled from your account, to the DSWD account's development branch.

```
$ git push -u origin my_branch
```

To raise the pull request, go to the [upstream repo](https://github.com/datasciencewithdaniel/datasciencewithdaniel/) and click on pull request. You can the request to be going from your own repo's ```my_branch``` to the datasciencewithdaniel repo and its ```development``` branch. Write a summary of the changes so the approver can quickly see what has changed. 

## Clean fork
The following commands clean up some of the work, however only do this once the pull request has been approved and the changes are sitting in the upstream repo.

```
$ git checkout development
$ git branch -D my_branch
$ git push origin --delete my_branch
```

## Update to latest versions
If you are again doing work, or want to make sure your branches are up to date, re-run the update commands to bring everyting in line.

```
$ git fetch upstream --prune
$ git checkout development
$ git merge upstream/development
$ git push origin development
$ git checkout master
$ git merge upstream/master
$ git push origin master
```

You can now follow the steps again to make any more changes that you want, such as writing another post.

## Management of changes | ADMIN ONLY
Once the pull request has been submitted, review and submit further commits until the changes are ready to be accepted. Accept the pull request and merge the changes into the ```development``` branch. Once any further changes are merged in, follow the same steps to merge the ```development``` branch into the ```master``` branch.

Complete the following steps the bring the ```development``` and ```master``` branches into alignment.

```
$ git checkout master
$ git pull origin master
$ git checkout development
$ git merge master
$ git push origin development
$ git checkout my-dev-branch
$ git merge development
```
