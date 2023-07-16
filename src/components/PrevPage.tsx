import React from "react";
import prevPage from "../assets/previous.png";

export default function PrevPage(props: {currentPage: number, handlePrevPage: any}) {
    const { currentPage, handlePrevPage } = props;
    const ClickHandler = () => {
        handlePrevPage(currentPage);
  	}

    return (
        <div>

            <button className="prev-button" onClick={ClickHandler}>

                <img src={prevPage} alt="Previous page" className="button"></img>

            </button>

        </div>
    );
}
