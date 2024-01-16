import React from 'react'
import TopCourses from '../../components/HomeSections/TopCourses'
import FetchSection from '../../components/HomeSections/FetchSection'
import OverCourse from '../../components/HomeSections/OverCourses'

const Home = () => {
  return (
    <main>
      <TopCourses/>
      <OverCourse/>
      <FetchSection/>
    </main>
  )
}

export default Home