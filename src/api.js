import { parse } from "./parser";

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_ULR = 'https://flickr.com/services/feeds/photos_public.gne?';


export async function getImages(criteria) {
    const { tag } = criteria;
    const text = await fetch(`${CORS_PROXY}${API_ULR}tags=${tag}`)
        .then(res => res.text());

    return parse(text);
}
