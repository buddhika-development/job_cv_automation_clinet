import React from 'react'

const Title = ({title_content = "sample title"} : {title_content:String}) => {
  return (
    <div>
        <h1 className='font-bold text-2xl'>{title_content}</h1>
    </div>
  )
}

export default Title