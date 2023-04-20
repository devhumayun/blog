import { useRouter } from "next/router"

const blogNum = () => {

    const router = useRouter();
    const blogNumber = router.query.blogNum
    console.log(router);

  return (
    <>
      <h1> This is blog number {blogNumber} </h1>
    </>
  )
}

export default blogNum
