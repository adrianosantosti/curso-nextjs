//const BASE_GAME_URL = "https://github.com/emersonbroga/nintendo-64-games/blob/main/images";
const BASE_GAME_URL = "/assets/images/games/";


export const getGameImage = (image:string) => {
    return (
        `${BASE_GAME_URL}${image}`
    );
}

export const getGameUrl = (slug: string) => {
    return `/games/${slug}`;
}