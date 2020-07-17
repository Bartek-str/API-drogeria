import React from "react";
import { Link as ReactLink } from "react-router-dom";

const Main = () => (
    <div className='MainContainer'>
        <div className='first'>
            <div className='container'>
                <div className='headLine'>Kosmetyki wybierane z pasji</div>
                <div className='line'>chcesz wiedzieć więcej</div>
                <ReactLink to='/sklep'><div className='goToShop'>Sprawdź asortyment</div></ReactLink>
            </div>
        </div>
        <div className='second' id='aboutUs'>
            <div className='container'>
                <div className='headerIdea'>Nasza idea</div>
                <div className='text'>Kosmetyki o prostych składach, które chronią Ciebie jak i środowisko to nasza inspiracja. Staramy się żyć zgodnie z naturą. Ważne jest dla nas, by używać produktów polskich marek i tym samym wspierać to co najlepsze w naszym kraju. Wierzymy, że prostota kosmetyków i pielęgnacji to sedno rytuału piękna. Nie możemy zapomnieć, że pielęgnacja jest dla nas czasem relaksu i zadbania o siebie w domowym zaciszu. Starajmy się ten czas wykorzystać jak najlepiej przy użyciu świetnych kosmetyków.</div>
            </div>
        </div>
        <div className='third' />
        <div className='fourth'>
            <div className='container container1'>
                <div className='headerOpinions'>Opinie</div>
                <div className='text'>Tutaj w przyszłości będą wasze opinie na nasz temat. Jednak narazie sama strona jest dalej w budowie i jeszcze trochę nam zajmie zanim osiągniemy taki efekt jaki planujemy. Prosimy w takim razie o cierpliwość i wyrozumiałość. Dziękujemy za wasze wsparcie.</div>
            </div>
        </div>
        <div className='fifth' />
    </div>
)

export default Main;