import React, {Component} from 'react';

class Music extends Component {
    render() {
        return (
            <div className="musicPage descriptions">
                <p className="description">Моя любовь к музыке находится в постоянном поиске новых звучаний и
                    переживаний. Я ценю разнообразие и качество исполнения в музыке, что отражается в моих
                    предпочтениях. На некоторые дни я могу погружаться в мир классической музыки, наслаждаясь глубокой
                    гармонией и мелодичностью произведений великих композиторов. Это время для меня – это возможность
                    утонуть в мире изящества и красоты звука.</p>
                <iframe style={{margin: "15px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/4n5yo959jq4?si=PcF_zkhOnNIt6u_V">
                </iframe>
                <iframe style={{margin: "10px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/HGW0NZ0DbuA?si=GOA1VTadLGmNduTg">
                </iframe>
                <iframe style={{margin: "10px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/euADQ0kZGZ8?si=IWyj6db-Gq7CbUyQ">
                </iframe>
                <iframe style={{margin: "10px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/lIvW4IBGNsE?si=DU0_KUDLiyEVOR8M">
                </iframe>
                <iframe style={{margin: "10px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/3BBsF7VIQyo?si=4n2GUHiF1SxIXmML">
                </iframe>
                <iframe style={{margin: "10px auto 0", padding: "5px"}} width="420" height="200"
                        src="https://www.youtube.com/embed/Oz-8k9mJoXA?si=MX8j13xGsloq-JzV">
                </iframe>
            </div>
        );
    }
}

export default Music;