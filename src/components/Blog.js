import React from 'react'

const Blog = () => {
  return (
    <div id='blog' className='flex'>
    <div className='p-8 w-[50%] bg-red-600 flex justify-end'>

      <div className='flex flex-col items-end w-fit'>
        <div className='mx-auto text-[65px] text-white font-bold leading-none py-8'>Auto Marc<br/>Youtube</div>
        <div><iframe width="500" height="315" src="https://www.youtube.com/embed/0YmT1B3NdOs?si=b8pOM3tGGXSNOnT7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
      </div>

    </div>

    <div className='p-8 w-[50%] bg-blue-700 flex flex-col justify-start'>
      <div className='flex flex-col items-end w-fit'>
          <div className='mx-auto text-[65px] text-white font-bold leading-none py-8'>Auto Marc<br/>Facebook</div>
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/qRvTOX81l8M?si=ryU7cz84T_WX-rGh" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
      </div>
    </div>

  </div>
  )
}

export default Blog