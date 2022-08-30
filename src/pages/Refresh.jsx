import { useNavigate } from "react-router-dom";

const Refresh = () => {
    const navigate = useNavigate()
    navigate(-1)
}

export default Refresh