import React from "react";
import nextPage from "../assets/next.png";

export default function NextPage(props: {currentPage: number, handleNextPage: any}) {
    const { currentPage, handleNextPage } = props;
    const ClickHandler = () => {
    	handleNextPage(currentPage);
  	}

    return (
        <div>

            <button className="next-button" onClick={ClickHandler}>

                <img src={nextPage} alt="Next page" className="button"></img>

            </button>

        </div>
    );
}