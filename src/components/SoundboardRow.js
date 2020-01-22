import React, { useEffect, useState } from "react"
import { Box } from "grommet"

import SoundboardSound from "./SoundboardSound"
import sounds from "../lib/sounds"
import chunkArray from "../lib/chunkArray"

const SOUNDS_PER_ROW = 3

const SoundboardRow = ({
  sounds,
  onPlay,
  onStop,
  sprite,
  currentlyPlaying,
}) => {
  const isPlaying = sound => currentlyPlaying && currentlyPlaying === sound.name

  return (
    <Box direction="row" fill>
      {sounds.map(x => (
        <SoundboardSound
          handleClick={onPlay}
          sound={x}
          key={x.name}
          sprite={sprite[x.name]}
          isPlaying={isPlaying(x)}
        />
      ))}
    </Box>
  )
}

export default SoundboardRow
