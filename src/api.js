import { parse } from "./parser";

const API_ULR = 'https://api.unsplash.com/search/photos?client_id=xWThhrnevQ6JGHSaDz0UTmaJnzv8_XISkTyc28O_jbs&per_page=50';


export async function getImages(criteria) {
    const { tag } = criteria;
    const text = await fetch(`${API_ULR}&query=${tag}`)
        .then(res => res.text());

    return parse(text);
}
