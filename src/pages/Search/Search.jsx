import { useParams } from "react-router"
import Navbar from "../../components/Navbar/Navbar"

export default function Search() {
    const {title} = useParams();
    return (
        <>
            <Navbar/>
            <p>{title}</p>
        </>
    )
}