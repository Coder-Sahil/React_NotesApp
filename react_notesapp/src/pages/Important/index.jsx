import Footer from "../../components/Footer/index";
import MainComponent from "../../components/MainComponent";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Important = () => {

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <MainComponent tag="IMPORTANT" />
            </main>
            <Footer />
        </>
    )
}

export default Important;