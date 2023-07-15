# jazzbutcher.com V1 - (HTDB codebase)

Contained here are the .htdb files which drive the rendering of the jazzbutcher.com website.

These are being shared in order to facilitate a reference for a codebase modernization.

## some history

The jazzbutcher.com website, beginning in 1994, was written using [David Whittemore's](https://davidwhittemore.com) [HTDB scripting language](https://htdb.org).

In a nutshell, .htdb files are specially formatted text files which are processed at page request time by the custom htdb cgi-bin application.

In modern terms, this would be server-side rendering (SSR).

The .htdb format allows database calls and embedded scripting logic to be interspersed with HTML fragments.  HTDB also allows one to define scripted function calls.  These concepts provides the website developer a way to create and re-use defined "resources": database results, layouts, HTML fragments, etc.

In modern terms, this is very similar to server-side components.

While the world has finally caught up to HTDB in concept (grin :-), current  approaches are considerably more friendly to work with, and easier on the eyes.

Which is to say: HTDB files can be difficult to work with.

The jazzbutcher.com HTDB files in particular are the most complex examples of HTDB files.

This is why *things must change*

## the roadmap to V2 (node codebase)

Much of what is currently derived in realtime from database results could, in fact, be transformed into static .json files.

Once .json files have been created, nextjs/React components could replace HTDB scripted results.

## the challenge

Currently, not *all* of the data is held in the database.  Unfortunately, much real "data" is interspered within the .htdb data files - declared as arrays and variables in HTDB, and then used by HTDB scripts.

It will be a challenge to extract this information, while maintaining the orginial intent and layout.

## the process

*TDB*
