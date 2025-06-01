import Navbar from "../components/Navbar"
import About from "../components/About"
import TechStack from "../components/TechStack"
import Footer from "../components/Footer"
import Future from "../components/Future"

function Dashboard(){
    return(
        <div className="dashboard">
            <div>
                <Navbar />
            </div>
            <div>
                <About />
            </div>
            <div>
                <TechStack />
            </div>
            <div>
                <Future />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard;