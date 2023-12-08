import React from 'react'
import TimeTable from '../components/TimeTable/TimeTable';


export default function TimeTablePage() {
  return (
    <div className='bg-white mx-5 my-9'>
        <h1 className='text-center text-2xl'>Расписание</h1>
        <div className='mt-12'>
          <TimeTable />
        </div>
    </div>
  )
}
