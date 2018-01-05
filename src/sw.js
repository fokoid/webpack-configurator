// placeholder stuff
const files = [
  { name: 'webpack.config.js', language: 'javascript', content: 'module.exports = {}'},
  { name: '.babelrc', language: 'json', content: '{}' },
  { name: 'package.json', language: 'json', content: '{}' }
]

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  '/config/manifest',
  () => new Response(
    JSON.stringify({files}),
    {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  )
)

workbox.routing.registerRoute(
  /config\/files\/(.*)/,
  ({url}) => {
    const filename = url.pathname.match(/\/config\/files\/(.*)/)[1]
    return new Response(
      files
      .filter(file => filename === file.name)
      .map(({content}) => content)
    )
  }
)
