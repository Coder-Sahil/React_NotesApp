import Footer from "../../components/Footer/index";
import MainComponent from "../../components/MainComponent";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Home = () => {

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <MainComponent tag="HOME" />
            </main>
            <Footer />
        </>
    )
}

export default Home;