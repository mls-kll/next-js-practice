const client = require('contentful').createClient({
  space: process.env.contentfulSpace,
  accessToken: process.env.contentfulAccessToken,
});

export default async function getContent(contentType, id) {
  const entries = await client.getEntries({
    content_type: contentType,
    'fields.id[in]': id,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
