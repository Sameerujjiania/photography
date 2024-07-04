import React from 'react'

export default function SingleImage({page,imageNumber,data,i}) {
  return (
    <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src={data[page * imageNumber + i].images.png}
      alt=""
    />
  </div>
  )
}
