import "./Accordion.css"
import Chevron from "../..assets/icons/ChevronUp.svg"
import { useState } from "react";

export default function Accordion({ title, children }) {

    const [isOpen, setIsOpen] = useState(true);


    function toggleOpen() {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <div className="accordion-row">
                <div className="line short" />
                <p>{title}</p>
                <div className="line" />
                <img className={!isOpen ? "closed" : ""} src={Chevron} />
                <div className="line short" />
            </div>


        </>
    )

}

