"use client";
import React, { useRef, useState } from 'react';
import { padZero, songLinkMapped, dateDiff } from '@/lib/utils';
import IconSkipForward from '@/svg/IconSkipForward';
import IconSkipBackward from '@/svg/IconSkipBackward';

import { parseDomain, parseCredit, linkExternal } from '@/lib/utils';
import { Attribution } from '@/components/GenericWeb';

export const GigPlayerFooter = ({ source, comment, credit }) => {
	const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = credit?.includes(';;') && parseCredit(credit) || {};
	return (<div className="gigplayer_footer">
		{comment && <div className="gigplayer_comment">{comment}</div>}
		{source && <div className="gigplayer_source">{linkExternal(source, parseDomain(source))}</div>}
		{(mediacredit) && <Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate} />}
	</div>)
}

export const GigPlayerHeader = ({ title, artist, version, datetime, city, state, country, venue }) => {
	const location = <>
		<span className='gigplayer_venue'>{venue}</span>
		{[city, state, country ].filter(f => f).join(', ')}
	</>
	return (<div className="gigplayer_header">
		{artist && <span className='gigplayer_artist'>{artist}</span>}
		{title && <span className='gigplayer_title'>{title}</span>}
		{version && <span className='gigplayer_version'>{version}</span>}
		{location && <span className='gigplayer_location'>{location}</span>}
		{datetime && <span className='gigplayer_datetime'>{datetime} {dateDiff(datetime, ' - ')}</span>}
	</div>);
}
/*
		tracks: [ { title, start, artist, version, comment } ]
 */
const GigPlayer = ({ src, tracks, header, footer }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

  const handleDuration = () => {
    const audio = audioRef.current;
		setDuration(audio.duration);
	}

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
		setIsPlaying(!audio.paused);
		// manufacture temp structure to hold end times
		setDuration(audio.duration);
		const tracksEnds = tracks?.map((p, i) => {
			return {
				...p,
				end: (i === tracks.length - 1) ? duration : tracks[i + 1]?.start
			};
		});
		// which track are we currently within?
		const nextIdx = tracksEnds.findIndex(t => audio.currentTime >= t.start && audio.currentTime < t.end);
		if (nextIdx !== currentTrackIndex) {
      setCurrentTrackIndex(nextIdx);
		}
  };

	const jumpSeconds = (s) => {
		setIsPlaying(true);
    const audio = audioRef.current;
		audio.currentTime = s;
		audio.play();
	}

	const jumpIdx = (idx) => {
		setIsPlaying(true);
		setCurrentTrackIndex(idx);
    const audio = audioRef.current;
		const { start } = tracks[idx];
		audio.currentTime = start;
		audio.play();
	}

  const handleNext = () => {
		jumpIdx((currentTrackIndex + 1) % tracks.length);
  };

  const handlePrev = () => {
		jumpIdx(currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1);
  };

	const secToTime = (s) => {
		const hours = (s - s % 3600) / 3600;
		const minutes = ((s - s % 60) / 60) % 60;
		const seconds = s % 60;
		let str = '';
		if (hours) str = `${padZero(hours)}:`;
		str = `${str}${padZero(minutes)}:${padZero(parseInt(seconds))}`;
		return str;
	}

  return (
		<div className="listItem"
				tabIndex="0" // Makes the div focusable
				onKeyDown={(event) => {
					const key = event.key;
					if (key === 'ArrowUp') handlePrev();
					if (key === 'ArrowDown') handleNext();
				}}
		>
			{header}
			<div className="listItem">
			<b>{isPlaying ? 'Now Playing:' : (tracks[currentTrackIndex]?.title ? 'Paused:' : 'Ended')} {songLinkMapped(tracks[currentTrackIndex]?.title, true)}</b>
			<div
				style={{ display: 'flex' }}
			>
			{(tracks?.length > 1) && <button className="left-arrow" onClick={handlePrev}><IconSkipBackward style={{ width: '2.0em', marginTop: '1em'  }}/></button>}
			{(tracks?.length > 1) && <button className="right-arrow" onClick={handleNext}><IconSkipForward style={{ width: '2.0em', marginTop: '1em' }}/></button>}
			<audio
				className="audio_player" 
				ref={audioRef}
				src={src}
				onTimeUpdate={handleTimeUpdate}
				oncanplay={handleDuration}
				controls
			/>
			</div>
			<dl className="gigplayer_tracks">
			{tracks?.map((p, idx) => {
				const backgroundColor = { backgroundColor: (idx === currentTrackIndex) ? 'lightgreen' : 'white' };
				return (<dd key={idx} className='pointable' style={backgroundColor}>
				<div onClick={() => jumpIdx(idx)}>
				<tt>{secToTime(p.start)} - {idx + 1}.</tt> <span> {p?.title} </span>
				{(p.artist) && <>({p.artist})</>}
				{(p.author && (typeof p.author === 'string') && !p.author.includes('NULL')) && <span className="smalltext pl-3"> ({p.author}) </span>}
				{(p.version) && <span className="smalltext pl-3"> ({p.version}) </span>}
				{(p.comment) && <span className="smalltext"> <i>(<span dangerouslySetInnerHTML={{ __html: p.comment }} /></i>)</span>}
				</div>
				{(p.annotation?.length) && <>{p.annotation.map(({ start, comment, link }) => {
					return (<li className="smalltext">
						<tt className='pointable' onClick={() => jumpSeconds(start)}>{secToTime(start)}</tt>
						{linkExternal(link, comment)}
						</li>
					)
				})}</>
				}
				</dd>)
				})}
			</dl>
			</div>
			{footer}
		</div>
  );
};

export default GigPlayer;
