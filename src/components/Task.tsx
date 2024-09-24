import React from 'react'
import SideBar from './SideBar'
import Header from './Header'

const Task: React.FC = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className="content w-full">
        <Header />
        <main style={{height: "calc(100vh - 80px)"}} className='overflow-y-auto bg-slate-50 md:ps-7 pt-10'>
          <section className="title">
            <p className='text-2xl font-semibold cursor-pointer' >🔥 Task</p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Task;
