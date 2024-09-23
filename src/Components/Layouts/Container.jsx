import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-container mx-auto px-[10px] xl:px-0 ${className}`}>{children}</div>
  )
}

export default Container