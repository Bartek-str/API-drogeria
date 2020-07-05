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
                <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat.</div>
            </div>
        </div>
        <div className='fifth' />
    </div>
)

export default Main;