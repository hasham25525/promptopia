'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "../../components/Profile"
// import Profile from "@components/Profile"



const MyProfile = () => {

  const { data: session } = useSession;
  const router = useRouter();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if (session?.user.id) fetchPosts();
  }, []);


  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this proompt?")
    if (hasConfirmed) {
      try {
        await fatch(`/api/prompt/${post._id.toString()}`, {
          methode: 'DELETE'
        })
        const filterPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filterPosts)
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <Profile
      name='My'
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile;