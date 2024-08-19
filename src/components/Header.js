import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around items-center px-8 py-2 mb-6'>
        <div className="cursor-pointer">
          <img src="https://static.wixstatic.com/media/6670d1_db5ab58d0fd141d9a068da1e6f06812a~mv2.png/v1/fill/w_374,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AutomarcLogo_PNG.png" alt="Automarc" width='249px' height='69px'/>
        </div>
        <div className="flex underline pr-12 cursor-pointer">
          <span className='font-semibold'>SHOWROOM&nbsp;</span>
           | +919310047313
        </div>
      </div>
  )
}

export default Header