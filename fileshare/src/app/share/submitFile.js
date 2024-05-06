import React from 'react'

const submitFile =  (file) => {
    const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "v1gbkqhh")
        data.append("cloud_name", "dhsy101q4")
    
        fetch("https://api.cloudinary.com/v1_1/dhsy101q4/image/upload", {
          method: 'POST',
          body:data
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          const secure_url  = data.secure_url
          setUrl(secure_url)
          
        }).catch((err)=>{
          console.log(err)
        })

  return (
    <div>

    </div>

  )
}
export default submitFile