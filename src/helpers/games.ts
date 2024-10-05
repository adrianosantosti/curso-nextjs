//const BASE_GAME_URL = "https://raw.githubsercontent.com/emersonbroga/nintendo-64-games/main/images/";
const BASE_GAME_URL = "/assets/images/games/";


export const getGameImage = (image:string) => {
    return (
        `${BASE_GAME_URL}${image}`
    );
}