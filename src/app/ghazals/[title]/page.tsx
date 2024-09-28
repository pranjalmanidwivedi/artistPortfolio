import React from 'react'
import writingData from "@/data/writing_data.json";

const page = ({ params }: { params: { title: string } }) => {

  const ghazal = writingData.writings.find((ghazal) => ghazal.title === decodeURIComponent(params.title))

  const descriptionWithLineBreaks = ghazal?.description?.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className='flex items-center justify-center mt-40 py-5 px-5'>
      <p className='text-left text-l'>
      {descriptionWithLineBreaks}
      </p>
    </div>
    

  )
}

export default page