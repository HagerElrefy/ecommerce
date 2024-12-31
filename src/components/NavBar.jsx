import React, { memo } from 'react'
import FirstNavSec from './FirstNavSec'
import SecondNavSec from './SecondNavSec'

function NavBar() {
  return (
    <header>
        <FirstNavSec/>
        <SecondNavSec/>
    </header>
  )
}
export default memo(NavBar);
