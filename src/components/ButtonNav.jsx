import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { open } from '../store/slices/show'

export const ButtonNav = () => {

    const dispatch = useDispatch()

    return (
        <div className="nav" id="start">
            <button onClick={() => dispatch( open() )} className="nav__button">
                <FaBars/>
            </button>
        </div>
    )
}


