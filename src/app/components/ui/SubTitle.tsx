import React from 'react'

const SubTitle = ({sub_title_content = 'Sample subtitle content'} : {sub_title_content : String}) => {
  return (
    <div>
        <h5 className='font-normal text-lg text-zinc-500 text-sm'>{sub_title_content}</h5>
    </div>
  )
}

export default SubTitle