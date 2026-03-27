import { Link } from "react-router-dom";

const Sidebar = () => {

    return(
        <>
            <aside className="flex flex-col gap-3 w-[180px] h-full h-screen divide-y
                            border-r-2 border-purple-500 divide-purple-500
                            p-3">
                <Link className="flex flex-center p-2 hover:bg-pink-800 hover:rounded-e-xl" to="/">
                    <span class="material-symbols-outlined">home</span>
                    <span>Home</span>
                </Link>
                <Link className="flex flex-center g-1 p-2 hover:bg-pink-800 hover:rounded-e-xl" to="/important">
                    <span class="material-symbols-outlined">Label_important</span>
                    <span>Important</span>
                </Link>
                <Link className="flex flex-center g-1 p-2 hover:bg-pink-800 hover:rounded-e-xl" to="/archive">
                    <span class="material-symbols-outlined">archive</span>
                    <span>Archive</span>
                </Link>
                <Link className="flex flex-center g-1 p-2 hover:bg-pink-800 hover:rounded-e-xl" to="/bin">
                <span class="material-symbols-outlined">auto_delete</span>
                <span>Bin</span>
                </Link>
            </aside>
        </>
    )
}

export default Sidebar;