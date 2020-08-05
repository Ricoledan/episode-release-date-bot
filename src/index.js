const { getImdbId, getNextEpisode } = require('imdb-api-client')

module.exports = async function App(context) {
  let metaInfo = {}

  if (context.event.isText) {
    const getId = await getImdbId(context.event.text.toLowerCase())
    const getNextEpisodeInfo = await getNextEpisode(getId)
    const showEpisodeInfo = `Next episode of ${getNextEpisodeInfo.name} "${getNextEpisodeInfo.nextEpisodeTitle}" aires ${getNextEpisodeInfo.releaseDate}`

    await context.sendText(showEpisodeInfo)
  }
}
