const { getImdbId, getNextEpisode } = require('imdb-api-client')

module.exports = async function App(context) {
  if (context.event.isText) {
    const getId = await getImdbId(context.event.text.toLowerCase())
    const getNextEpisodeInfo = await getNextEpisode(getId)

    if (getNextEpisodeInfo) {
      const showEpisodeInfo = `Next episode of ${getNextEpisodeInfo.name} "${getNextEpisodeInfo.nextEpisodeTitle}" aires ${getNextEpisodeInfo.releaseDate}`
      await context.sendText(showEpisodeInfo)
    } else {
      await context.sendText(
        'We do not have any information on the tv series you requested'
      )
    }
  }
}
