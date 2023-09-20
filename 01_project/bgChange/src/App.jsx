import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}  
      >
        <div className='fixed flex flex-wrap justify-center bottom-2 px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full'
             onClick={()=>setColor("red")} 
              style={{backgroundColor:"red"}}
            > Red
            </button>
            <button className='outline-none px-4 py-1 rounded-full' 
             onClick={()=>setColor("green")} 
              style={{backgroundColor:"green"}}
            > Green
            </button>
            <button className='outline-none px-4 py-1 rounded-full' 
             onClick={()=>setColor("blue")} 
              style={{backgroundColor:"blue"}}
            > Blue
            </button>
            <button className='outline-none px-4 py-1 rounded-full' 
              onClick={()=>setColor("yellow")} 
              style={{backgroundColor:"yellow"}}
            > Yellow
            </button>
            <button className='outline-none px-4 py-1 rounded-full' 
              onClick={()=>setColor("pink")} 
              style={{backgroundColor:"pink"}}
            > Pink
            </button>
            <button className='outline-none px-4 py-1 rounded-full' 
              onClick={()=>setColor("#6600ff")} 
              style={{backgroundColor:"6600ff"}}
            > Royal blue
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
