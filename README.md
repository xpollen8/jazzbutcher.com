
# Hello!

David Whittemore, here..

Historically, the contents of the jazzbutcher.com website has been a tightly-curated affair, and the accuracy of its contents has been dictated by information availability and personal free time.

Obviously, there is more information "out there", and having more people on the case could only be a good thing.

# *Which is where _you_ come in*

With a little bit of effort, the collected Jazz Butcher archives can have a fighting chance to make it past just the lifetime of one person.

With shared ownership in this repository, the raw information that drives jbc com will not be stuck "somewhere". Instead the information could be available for others to mine and repurpose and improve upon.

This is the first step to formalize a public/participatory framework for maintaining the jazzbutcher.com website: announcing the intent, and inviting participants in an open sharing of information.

# *I hope you'll join us*

[Here is how you can participate](https://github.com/xpollen8/jazzbutcher.com/blob/main/PARTICIPATE.md) 

# *Repository Layout*

## v1

The `v1` directory contains (most) of the .htdb files which drive the HTDB version of the jazzbutcher.com website

## v2

The `v2` directory contains the Work In Progress which is the conversion of the `v1` site into a nextjs/React application.

Changes made here will be deployed within a minute to [https://v2.jazzbutcher.com/](https://v2.jazzbutcher.com/)

I am *completely* open to collaborating with people with web design and/or UX experience.  Let's work on this together.  Hit me up!

## How to run your own local JBC com V2!

* have git installed
* have nodejs 17+ installed (i use nvm)

`nvm install 17 && nvm use 17`

* install the code

`git clone git@github.com:xpollen8/jazzbutcher.com.git`

* get in the right directory
  
`cd jazzbutcher.com/v2`

* Add this to `.env.local`:
  
```
echo "JBC_HTDB_SERVER=https://v1.jazzbutcher.com" > .env.local
echo "JBC_DATA_SERVER=https://data.jazzbutcher.com" >> .env.local
echo "## disables auth on /admin" >> .env.local
echo "LOCAL_DEV=true" >> .env.local
```
* install dependencies

`npm i`

* and run it!

`npm run dev`

* open `http://localhost:3000` in a browser
