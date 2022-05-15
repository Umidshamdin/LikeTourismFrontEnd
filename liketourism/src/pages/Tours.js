import React from 'react'
import Info from '../components/Info'
import Papularplace from '../components/Papularplace'
import Searchtour from '../components/Searchtour'

function Tours() {
  return (
    <div>
        <Searchtour></Searchtour>
        <Papularplace></Papularplace>
        <Info></Info>
    </div>
  )
}

export default Tours