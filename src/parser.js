// parses whole the data
export function parse(json) {

    return JSON.parse(json).results.map(result => parseItem(result));
}

// extracts specific pieces of info from the whole lot data
function parseItem(data) {
    const id = data.id;
    const title = data.description ?? data.alt_description;
    const published = data.created_at;
    const thumb_url = data.urls.thumb;
    const full_url = data.urls.full;
    const user = { id: data.user.id, name: data.user.name, uri: data.user.portfolio_url };
    const tags = data.tags.map(tag => tag.title);

    return { id, title, published, thumb_url, full_url, user, tags };
}

