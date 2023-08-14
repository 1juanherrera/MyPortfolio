import { useState } from "react";
import { TbArrowBadgeUpFilled, TbArrowBadgeDownFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../store/slices/language";


export const Switch = () => {

    const [ isOpen, setIsOpen ] = useState( false );
    
    const dispatch = useDispatch();

    return (
        <div className="switch" style={{ height: isOpen ? '5rem' : '2rem' }}>
            <button className="switch__button" onClick={() => setIsOpen( !isOpen )}>
                <TbArrowBadgeUpFilled style={{ display: isOpen ? 'none' : 'block' }}/>
                <TbArrowBadgeDownFilled style={{ display: isOpen ? 'block' : 'none' }}/>
            </button>

                <div className="switch__toggle" style={{ display: isOpen ? 'flex' : 'none' }}>
                    <input onChange={() => dispatch( changeLanguage() )} type="checkbox" id="toggle" className="switch__toggle__offscreen"/>
                    <label htmlFor="toggle" className="switch__toggle__label"></label>
                </div>  
            
        </div>
    )
}