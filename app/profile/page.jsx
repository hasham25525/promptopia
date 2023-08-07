'use client'
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const handleEdit = () => {

}
const handleDelete = async () => {

}

const MyProfile = () => {
  return (
    <Profile
      name='My'
      desc="welcome to your personalized profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile