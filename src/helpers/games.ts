const BASE_GAME_URL = "https://raw.githubsercontent.com/emersonbroga/nintendo-64-games/main/images/";

export const getGameImage = (image:string) => {
    return (
        `${BASE_GAME_URL}${image}`
    );
}