import React from 'react'
import Image from 'next/image'
import moment from 'moment-timezone';

const Location = () => {

    const [currentTime, setCurrentTime] = useState('');


    
  return (
    <div className='w-full h-full grid grid-cols-2 divide-x divide-secondary p-2 box-border'>
        <div className='flex flex-col items-center justify-center'>
            <Image 
                src="/images/onPc.gif"
                alt='working'
                fill
                style={{ width: '80%', height: '60%' }}
            /> 
            <p>

            </p>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Location