import Link from 'next/link'
import React from 'react'

const MenuItem = ({mn}) => {
  return (
    <div>
      <Link href={mn.url}>{mn.name}</Link>
    </div>
  )
}

export default MenuItem
