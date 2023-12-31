import { useState, useEffect } from "react";
import "../styles/Grid.css";
import "../styles/Card.css";
import APIService from "../services/APIService";
import { MarvelApiResponse, Character } from "../types/API";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Card from "../components/Card";
import PrevPage from "../components/PrevPage";
import NextPage from "../components/NextPage";
import CardModal from "../components/CardModal";
import React from "react";
export default function Main() {
    const [apiResponse, setApiResponse] = useState<MarvelApiResponse | undefined>();
    const [characters, setCharacters] = useState<Character[]>();
    const [pagination, setPagination] = useState<number>(1);
    const [characterDetails, setCharacterDetails] = useState<Character>();
    const [detailsView, setDetailsView] = useState<boolean>(false);

    // Fetch data from API on component mount
    useEffect(() => {
        const fetchData = async () => {
            const response = await APIService.getResponse(pagination);
            setApiResponse(response.data);
        };
        const timer = setTimeout(() => {
            fetchData();
        }, 5000);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Set characters state on apiResponse fetch
    useEffect(() => {
        if(apiResponse){
            setCharacters(apiResponse.data.results);
        }
    }, [apiResponse]);

    // Pagination handler moving forward
    const handleNextPage = (newPage: number) => {
        setPagination(pagination + 1);
    };

    // Pagination handler moving backward
    const handlePrevPage = (newPage: number) => {
        if(pagination > 1){
            setPagination(pagination - 1);
        }
    };

    // Fetch data from API on pagination change
    useEffect(() => {
        APIService.getResponse(pagination).then((response) => {
            setApiResponse(response.data);
        });
    }, [pagination]);
    
    // Card click handler to show details
    const handleCardClick = (character: Character) => {
        setCharacterDetails(character);
        setDetailsView(true);
    };

    // Back to main view handler
    const handleBackToMain = () => {
        setDetailsView(false);
    };

    // Component render
    return (
        <div>
            <div>
                <div onClick={handleBackToMain}>
                    
                    <Header />
                
                </div>

                {!apiResponse?.data.results &&
                <Loader />
                }

                {detailsView &&
                <CardModal character={characterDetails!}/>
                }
                
                {apiResponse &&
                <section className="chars-section">
                    
                    <PrevPage currentPage={pagination} handlePrevPage={handlePrevPage}/>
                    
                    <div className="cards-grid">
                        {characters?.map((character) => (
                            <div key={character.id} className="card-item">
                                <Card character={character} cardClick={handleCardClick}/>
                            </div>
                        ))}
                    </div>
                    
                    <NextPage currentPage={pagination} handleNextPage={handleNextPage}/>
                
                </section>
                }

            </div>
        </div>
    );
}