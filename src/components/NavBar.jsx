import React, { memo } from 'react'
import FirstNavSec from './FirstNavSec'
import SecondNavSec from './SecondNavSec'

function NavBar() {
  return (
    <header className=''>
        <FirstNavSec/>
        <SecondNavSec/>
    </header>
  )
}
export default memo(NavBar);
