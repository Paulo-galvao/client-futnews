import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router"

export default function HandlePost() {
    const { action } = useParams();
    const { register, handleSubmit, reset,
        formState: { errors } 
    } = useForm();
const navigate = useNavigate()
    return (
        <>
            HandlePost
        </>
    )
}