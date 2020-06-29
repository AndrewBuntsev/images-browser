// parses whole the text
export function parse(text) {
    const entries = parseXmlTag(text, 'entry');
    if (!entries) return [];
    return entries.map(e => parseEntry(e));
}

// extracts specific pieces of info from the whole entry data
function parseEntry(entry) {
    const title = parseXmlTag(entry, 'title')[0];
    const id = parseXmlTag(entry, 'id')[0];
    const published = parseXmlTag(entry, 'published')[0];
    const author = parseAuthor(parseXmlTag(entry, 'author')[0]);
    const url = parseImageUrl(entry);
    const tags = parseTags(entry);

    return { title, id, published, author, url, tags };
}

// extracts specific pieces of the author presonal info
function parseAuthor(author) {
    const name = parseXmlTag(author, 'name')[0];
    const uri = parseXmlTag(author, 'uri')[0];
    const id = parseXmlTag(author, 'flickr:nsid')[0];
    const avatar = parseXmlTag(author, 'flickr:buddyicon')[0];

    return { name, uri, id, avatar };
}

// extracts the image url
function parseImageUrl(str) {
    return str.match(/(?<=<link rel="enclosure")(.|\n)*?(?=\/>)/g)[0].match(/(?<=href=")(.|\n)*?(?=")/g)[0];
}

// extracts tags
function parseTags(str) {
    return str.match(/(?<=<category term=")(.|\n)*?(?=")/g);
}

// extracts the inner data from the specified tag
function parseXmlTag(str, tagName) {
    return str.match(new RegExp(`(?<=<${tagName}>)(.|\n)*?(?=<\/${tagName}>)`, 'g'));
}