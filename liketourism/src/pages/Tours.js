import React from 'react'
import Info from '../components/Info'
import Papularplace from '../components/Papularplace'
import Searchtour from '../components/Searchtour'
import Touraccordion from '../components/Touraccordion'

function Tours() {
  return (
    <div>
        <Searchtour></Searchtour>
        <Papularplace></Papularplace>
        <Info></Info>
        <Touraccordion></Touraccordion>
    </div>
  )
}

export default Tours