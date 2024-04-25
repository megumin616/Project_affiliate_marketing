import React, { useEffect, useState } from 'react'
// import { storage } from '../../firebase'
// import { getDownloadURL, listAll, ref } from 'firebase/storage'

export default function Admin() {
    // const [imageListAll, setImageListAll] = useState([])
    // const [ imageUrl, setImageUrl] = useState('')

    // const imageAll = ref(storage, "images/")

    // const specificImageRef = ref(storage, "images/about-left-image.jpg");

    // useEffect(() => {
    //     getDownloadURL(specificImageRef).then((url) => {
    //         setImageUrl([url])
    //     })
    // },[])
    // console.log("imageUrl:", imageUrl)

    // //pull data
    // const handlePullData = () => {
    //     listAll(imageAll).then((res) => {
    //         res.items.map((item) => {
    //             getDownloadURL(item).then((data) => {
    //                 setImageListAll(data)
    //             })
    //         })
    //     })
    // }
    // console.log("data", imageListAll)
  return (
    <div>
        <h1>Admin</h1>
        {/* <button onClick={handlePullData}>Pull Data</button> */}
    </div>
  )
}
