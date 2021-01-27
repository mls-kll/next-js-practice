const client = require('contentful').createClient({
  space: process.env.contentfulSpace,
  accessToken: process.env.contentfulAccessToken,
});

type ContentTypeProp = {
  name: string
}

export default async function getContent(contentType: ContentTypeProp, id: string, slug: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    ...(id && { 'fields.id[in]': id }),
    ...(slug && { 'fields.slug[in]': slug }),
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
