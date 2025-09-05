. ../.env.local

mkdir -p ./temp

if [[ -z $JBC_DATA_SERVER ]];
then
	echo '../.env.local does not contain value for: JBC_DATA_SERVER'
fi

TEMP_DIR=./temp
JBC_JSON_SERVER="$JBC_DATA_SERVER/api"
JBC_HTDB_SERVER="$JBC_HTDB_SERVER/htdb"
OUTPUT_DIR="../public/data"

#rm -rf $TEMP_DIR
#mkdir -p $TEMP_DIR

function _fetch () {
	remote=$1
	file=$2
	echo "#fetching $remote into $TEMP_DIR/$file ($OUTPUT_DIR/$file)"
	curl -s -o $TEMP_DIR/$file $remote
	diffResult=$(diff --brief $TEMP_DIR/$file $OUTPUT_DIR/$file 2>&1)
	if [ "$diffResult" != "" ]; then
		OLD=$(/bin/ls -latr $OUTPUT_DIR/$file)
		NEW=$(/bin/ls -latr $TEMP_DIR/$file)
		echo "#!!!!!!!!!!!!!!!!!!!!!!!"
		echo "#Data change detected in: $file."
		echo "#Consider updating $OUTPUT_DIR/$file with $TEMP_DIR/$file"
		echo "#--- OLD ---"
		echo "#$OLD"
		echo "#--- NEW ---"
		echo "#$NEW"
		echo "#--- COPY/PASTE ---"
		echo "(cp -p  $TEMP_DIR/$file $OUTPUT_DIR/$file && git commit -m \"updated from $remote\" $OUTPUT_DIR/$file)"
		echo
		echo
	else
		echo "#(no change to $file)"
	fi
}

function fetch () {
	_fetch $JBC_JSON_SERVER/$1 $2
}

function htdb_fetch () {
	_fetch $JBC_HTDB_SERVER/$1 $2
}

echo "-------------"
date
echo "-------------"
fetch lyrics lyrics.json
fetch gigs gigs.json
fetch gigsongs gigsongs.json
fetch gigtexts gigtexts.json
fetch gigmedias gigmedias.json
fetch performances performances.json
fetch presses presses.json
fetch medias medias.json
fetch feedbacks feedbacks.json

htdb_fetch db_albums/data.json releases.json
htdb_fetch newsItems/data.json newsV1.json

echo "-------------"
date
echo "-------------"
echo "Here are all the files in $TEMP_DIR"
/bin/ls -latr ./temp
