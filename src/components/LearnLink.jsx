import Link from 'next/link';
import React from 'react'

const LearnLink = () => {
    const id = 2;//we will get this from somewhere
  return (
    <>
     <Link href="/admin/dashboard/">Go to Admin Dashboard</Link>
     {/* dynamic link */}
     <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
    </>
  )
}

export default LearnLink;
