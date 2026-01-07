import React from 'react'
import Header from '../Homepage/Header'
import Banner from '../Homepage/Banner'
import ContentCards from './ContentCards'
import Animi from './Animi'
import Footer1 from './Footer1'
import Placement from './Placement'
import AboutLibrary from './Aboutlibrary'
import Authors from './Authors'
import About from './About'
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <ContentCards />
            {/* <Animi /> */}
            <AboutLibrary />
            <Authors />
            <Placement />
            <About />
            {/* <Footer /> */}
            <Footer1 />

        </div>
    )
}

export default Home