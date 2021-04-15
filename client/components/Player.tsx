import React from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import styles from "../styles/Player.module.scss"
import { Track } from '../types/track'
import TrackProgress from './TrackProgress'

const Player = () => {
  const track: Track = {
    _id: "1",
    name: "T",
    artist: "Adolf",
    listens: 1,
    audio:
      "https://github.com/utimur/music-platform-course/blob/master/client/pages/tracks/index.tsx",
    picture:
      "https://wowslider.com/sliders/demo-57/data1/images/raccoon365366.jpg",
    text: "123",
  };
  const active=false
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>{!active ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={10} onChange={(e) => console.log("Player is alive!!!")} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={10} onChange={(e) => console.log("Player is alive!!!")} />
    </div>
  )
}

export default Player
