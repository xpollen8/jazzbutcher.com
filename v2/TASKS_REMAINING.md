<strike>
√ move apiData ito app/api dir, sinec that's only place used now

√ Add components
	√ press in /releases
	√ audio in lyrics
	√ audio/video/press/gigs within /project/XXX
	√ notebook scans to lyrics pages

√ ensure ALL releases have correct performance entries for songs
</strike>

# add audio link to  performance entries for songs
  * this will take care of accounting for songs without any other association

# port all of /articles
	√ will now be /mailinglist
	* the year 2000 does appear to be in my old "strangle" mail folder
	* use hypermail to generate 2000 and/or modify to dump all to database

# navigation
	* should be able to auto-generate in Header component

# /conspirators
	* need to structure old people.htdb file into form that can dump to db

<strike>
√ /releases
	√ need to structure old albums.htdb file into form that can dump to db

√ /press
	√ need to extend the database table to hold everything.

√ what should be on the home page?
</strike>

# /gallery
	* needs complete build out

√ /gigs
	√ finish the templating

# /feedback
	* need to re-implement in React

√ /prejbc
	* clean it all up after finding a common templating

√ /project/sumo|wilson|vaguely familiar|black_eg
	√ gotta bunch of old material to rework

# complete the population of the 'entity' database table

# add authz step - an admin whitelist for people who do login via github
	* will probably require database table to hold permissions
	* better control this way versus locking it into github roles

# add 'featureat' column to feedback table to "lift up" particularly good comments.

---
https://web.dev/virtualize-long-lists-react-window/

SVG graphics: https://www.svgrepo.com/vectors/orchestra/
cool SVG->React component tool: https://react-svgr.com/playground/
possible backed tool for edit forms: https://github.com/vantezzen/auto-form

audio player: https://www.npmjs.com/package/react-h5-audio-player
