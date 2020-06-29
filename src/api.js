import { parse } from "./parser";

//const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';
//http://www.whateverorigin.org/

const API_ULR = 'https://flickr.com/services/feeds/photos_public.gne?';


export async function getImages(criteria) {
    const { tag } = criteria;
    const text = await fetch(`${CORS_PROXY}${API_ULR}tags=${tag}`)
        .then(res => res.text());

    return parse(text);
}
