import Footer from "../../components/Footer/index";
import MainComponent from "../../components/MainComponent";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Bin = () => {

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <MainComponent tag="BIN" />
            </main>
            <Footer />
        </>
    )
}

export default Bin;