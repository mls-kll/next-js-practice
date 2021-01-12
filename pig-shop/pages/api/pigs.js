const client = require('contentful').createClient({
  space: '4op1z3eu1szs',
  accessToken: 'aGsBh6Y-P6ObRjLtgh6CZwlglPq0sPzan_WBXUtbdVY'
});

async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// szűrni typera

async function getPigs() {
  const allPigs = await fetchEntries()
  return allPigs;
}

const pigs = getPigs();

export default (req, res) => {
  pigs.then(result => {
    const pigItems = result.filter(item => item.sys.contentType.sys.id === 'pigItem')
    return res.status(200).json(pigItems)
  });
}