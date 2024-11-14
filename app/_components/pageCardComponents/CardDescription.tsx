import React from 'react'

export default function CardDescription({description}:{description:string}) {
  return (
    <p className="dark-30 text-base font-medium">
        {description}
      </p>
  )
}
