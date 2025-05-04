"use client";
import React, { useRef, useState, useEffect } from 'react';
import { padZero, songLinkMapped, dateDiff } from '@/lib/utils';
import IconSkipForward from '@/svg/IconSkipForward';
import IconSkipBackward from '@/svg/IconSkipBackward';
import IconPlay from '@/svg/IconPlay';
import IconPause from '@/svg/IconPause';
import { parseDomain, parseCredit, linkExternal } from '@/lib/utils';
import { Attribution } from '@/components/GenericWeb';

export const GigPlayerFooter = ({ source, comment, credit, crediturl }) => {
	const { credit: mediacredit, crediturl: mediacrediturl, creditdate: mediacreditdate } = credit?.includes(';;') && parseCredit(credit) || { credit, crediturl  };
	return (<div className="gigplayer_footer">
		{comment && <div className="gigplayer_comment">{comment}</div>}
		{source && <div className="gigplayer_source">{linkExternal(source, parseDomain(source))}</div>}
		{(mediacredit) && <Attribution g={mediacredit} u={mediacrediturl} d={mediacreditdate} />}
	</div>)
}

export const GigPlayerHeader = ({ title, artist, version, datetime, city, state, country, venue, source }) => {
	const location = <>
		<span className='gigplayer_venue'>{venue}</span>
		<div>
			{[city, state, country ].filter(f => f).join(', ')}
		</div>
	</>
	return (<div className="gigplayer_header">
		{artist && <span className='gigplayer_artist'>{artist}</span>}
		{title && <span className='gigplayer_title'>{title}</span>}
		{version && <span className='gigplayer_version'>{version}</span>}
		{location && <span className='gigplayer_location'>{location}</span>}
		<div>
		{datetime && <span className='gigplayer_datetime'>{datetime} {dateDiff(datetime, ' : ')}</span>}
		</div>
	</div>);
}

/*
		tracks: [ { title, start, artist, version, comment } ]
 */
const GigPlayer = ({ src, tracks, header, footer }) => {
	const [audio] = React.useState(typeof Audio !== 'undefined' ? new Audio(src) : null);
  const audioRef = useRef(audio);
	const intervalRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
	const [duration, setDuration] = useState(0);
	const [remainingTime, setRemainingTime] = useState(0);
	const [remainingTrackTime, setRemainingTrackTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [info, setInfo] = useState();
	const [tracksEnds, setTrackEnds] = useState([]);

  useEffect(() => {
		intervalRef.current = setInterval(handleTimeUpdate, [1000]);
		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		};
	});

	useEffect(() => {
		setDuration(audio.duration);
		setTrackEnds(tracks?.map((p, i) => {
			return {
				...p,
				end: (i === tracks.length - 1) ? audio?.duration : tracks[i + 1]?.start
			};
		}));
	}, [audio?.duration, tracks]);

	useEffect(() => {
			setInfo(!audioRef?.current?.paused ? `` : (tracks[currentTrackIndex]?.title ? '(Paused)' : '(Ended)'));
	}, [audioRef?.current?.paused, tracks, currentTrackIndex]);

	if (!tracks?.length) return <></>;

	const jumpSeconds = (s) => {
    const audio = audioRef.current;
		audio.currentTime = s;
		audio.play();
    setCurrentTime(s);
    setIsPlaying(true);
	}

	const jumpIdx = (idx) => {
    const audio = audioRef.current;
		setCurrentTrackIndex(idx);
		const { start } = tracks[idx];
		audio.currentTime = start;
		audio.play();
    setCurrentTime(start);
    setIsPlaying(true);
	}

	const handleTimeUpdate = () => {
		const audio = audioRef.current;
		if (!audio.paused) {
			setCurrentTime(audio.currentTime);
			setRemainingTime(audio.duration - audio.currentTime);
			// manufacture temp structure to hold end times
			// which track are we currently within?
			const nextIdx = tracksEnds.findIndex(t => {
				//console.log(audio.currentTime, t.start, t.end);
				return audio.currentTime >= t.start && audio.currentTime < t.end
				});
			setRemainingTrackTime(tracksEnds[nextIdx].end - audio.currentTime);
			if (nextIdx !== currentTrackIndex) {
				setCurrentTrackIndex(nextIdx);
			}
		}
	};

  const handlePlay = () => {
    const audio = audioRef.current;
		if (audio.paused) {
			// resume at current time
			audio.play();
			setIsPlaying(true);
		} else {
			const { start } = tracks[currentTrackIndex];
			audio.currentTime = start;
			audio.play();
			setIsPlaying(true);
			setCurrentTime(start);
		}
  };

  const handleSliderChange = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
		jumpIdx((currentTrackIndex + 1) % tracks.length);
  };

  const handlePrev = () => {
		jumpIdx(currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1);
  };

  const onScrubEnd = () => {
		/*
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
		*/
  };

	const secToTime = (s = 0) => {
		const hours = (s - s % 3600) / 3600;
		const minutes = ((s - s % 60) / 60) % 60;
		const seconds = s % 60;
		let str = '';
		if (hours) str = `${padZero(hours)}:`;
		str = `${str}${padZero(minutes)}:${padZero(parseInt(seconds))}`;
		return str;
	}

  return (
		<div
			className="listItem"
			style={{
				background: 'white',
				border: '2px solid green',
				borderRadius: '5px',
			}}
			tabIndex="0" // Makes the div focusable
			onKeyDown={(event) => {
				const key = event.key;
				if (key === 'ArrowUp') handlePrev();
				if (key === 'ArrowDown') handleNext();
			}}
		>
			<div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '.5em' }}>
				{(header) && <span style={{ width: '100%', margin: 'auto' }}>
					{header}
				</span>}
				{(footer) && <span style={{ width: '100%', margin: 'auto' }}>
					{footer}
				</span>}
			</div>
			<div style={{ border: '2px solid black', borderRadius: '5px', background: (isPlaying) ? 'lightgreen' : 'white', padding: '.5em', textAlign: 'center', marginBottom: '.5em' }}>
				<span style={{ fontSize: '1.5em' }}><tt>{currentTrackIndex + 1}/{tracks?.length}.</tt><b>{songLinkMapped(tracks[currentTrackIndex]?.title, true)}</b></span>
				{/*<tt className="smalltext pl-3" style={{ padding: '2em' }}>{(info) || <>(-{secToTime(remainingTrackTime)})</>}</tt>*/}
			</div>
			<div style={{ marginBottom: '.5em' }}>
				<div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '5px', background: 'white', paddingRight: '1em', marginBottom: '.25em', marginTop: '.25em' }} >
					<span style={{ display: 'flex', paddingLeft: '1em', paddingRight: '.8em', borderRight: '1px dotted green', background: '#dedeee' }}>
						{(tracks?.length > 1) && <button className="left-arrow" onClick={handlePrev}><IconSkipBackward style={{ width: '2.0em', marginTop: '1em', }}/></button>}
						<button style={{ width: '2.0em' }} onClick={isPlaying ? handlePause : handlePlay}>
							{isPlaying ? <IconPause/> : <IconPlay/>}
						</button>
						{(tracks?.length > 1) && <button className="right-arrow" onClick={handleNext}><IconSkipForward style={{ width: '2.0em', marginTop: '1em', marginLeft: '.5em', marginRight: '-.75em' }}/></button>}
					</span>
					<input
						style={{ width: '100%', marginLeft: '.75em', marginRight: '.75em' }}
						type="range"
						min={0}
						max={duration}
						value={currentTime}
						onChange={handleSliderChange}
						onMouseUp={onScrubEnd}
						onKeyUp={onScrubEnd}
					/>
						<span className="smalltext" style={{ borderLeft: '1px dotted green', paddingLeft: '10px', margin: 'auto' }}>
							<tt style={{ background: isPlaying ? 'lightgreen' : 'white', fontWeight: 900 }}>{secToTime(currentTime)}</tt>
							<br />
							<tt>{secToTime(duration)}</tt>
						</span>
				</div>
			</div>
			<dl className="gigplayer_tracks">
			{tracks?.map((p, idx) => {
				const backgroundColor = { backgroundColor: (idx === currentTrackIndex) ? 'lightgreen' : (idx % 2 ? 'white' : '#f7f7f7') };
				return (<dd key={idx} className='pointable' style={backgroundColor}>
				<div onClick={() => jumpIdx(idx)}>
				<tt className="smalltext">{idx + 1}.</tt> <span> {p?.title} </span>
				{(p.artist) && <>({p.artist})</>}
				{(p.author && (typeof p.author === 'string') && !p.author.includes('NULL')) && <span className="smalltext pl-3"> ({p.author}) </span>}
				{(p.version) && <span className="smalltext pl-3"> ({p.version}) </span>}
				{(p.comment) && <span className="smalltext"> <i>(<span dangerouslySetInnerHTML={{ __html: p.comment }} /></i>)</span>}
				{(idx === currentTrackIndex) && <tt className="smalltext pl-3"><b>(-{secToTime(remainingTrackTime)})</b> {info}</tt>}
				</div>
				{(p?.annotation?.length) && <div className="gigplayer_annotation">{p?.annotation?.map(({ start, comment, link }, i) => {
					return (<li key={i} className="smalltext">
						<tt className='pointable' onClick={() => jumpSeconds(start)}>{secToTime(start)}</tt>
						{linkExternal(link, comment)}
						</li>
					)
				})}</div>
				}
				</dd>)
				})}
			</dl>
		</div>
  );
};

export default GigPlayer;
