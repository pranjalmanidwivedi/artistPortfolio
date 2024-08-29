import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube, faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const page = () => {
  return (
    <div className='mt-[250px] mx-14 flex flex-wrap items-center justify-center'>
      <div className=' px-4 mx-w-48 mt-4'>
        <h1 className='text-center text-2xl'>
          Contact
        </h1>
        <hr />
        <div className='mt-2'>
          <p className='text-[16px]'>pranjalmanidwivedi@gmail.com</p>
          <p className='mt-2 text-[19px]'>7440730657</p>
        </div>
      </div>

      <div className='px-4 mx-w-48 mt-10 sm:mt-0'>
        <h1 className='text-center text-2xl'>
          Social
        </h1>
        <hr />
        <div className='flex gap-4 mt-2 items-center justify-center'>
          <Link href={"https://open.spotify.com/artist/5bW5NMM2Vja13UOnBMQKiq?si=8JdL0BIdSfGvpjaeOLGaJA"}>
            <FontAwesomeIcon icon={faSpotify}
            width={35}  />
          </Link>

          <Link href={"https://www.youtube.com/@pranjalmanidwivedi"}>
            <FontAwesomeIcon icon={faYoutube}
            width={35} />
          </Link>

          <Link href={"https://www.instagram.com/pranjalmanidwivedi?igsh=MWhvYXo5a2pyOG1sbg=="}>
            <FontAwesomeIcon icon={faInstagram}
            width={35} />
          </Link>

          <Link href={"https://www.facebook.com/pranjalmani.dwivedi.58"}>
            <FontAwesomeIcon icon={faFacebook}
            width={35} />
          </Link>

          <Link href={"https://x.com/MrPrjld1?t=MA36Urv_U1WUwVtSNtLUSw&s=09"}>
            <FontAwesomeIcon icon={faXTwitter}
            width={35} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page