import React from 'react'

function HomeImageCard({galereyaAll}) {
 
  return (
    <div >
      {galereyaAll.map((item)=>(
        <div key={item?.id}>
          <img className='img' src={item?.img} alt="" />
          <h1>{item?.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default HomeImageCard
