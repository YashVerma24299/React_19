import React from 'react'
import { Link, Outlet} from 'react-router'

export default function College() {
  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">College Page </h1>
            <div className="flex gap-4 pt-3">
                <Link to={''}>Student</Link>  {/* Default Page  */}
                <Link to={'department'}>Department</Link>
                <Link to={'details'}>Details</Link>
            </div>
            
            <Outlet/>
        </div>
    </>
  )
}
