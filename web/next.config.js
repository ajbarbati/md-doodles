

// next.config.js
/*
 * Let's reuse the client configuration. I have rewritten
 * it as a CommonJS module just to make it runs in a Node
 * environment without any fuzz.
 */


// const client = require('./client.js')

module.exports = {
  async headers() {
    return [
      {
        source: '/*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
//   exportPathMap: async function (defaultPathMap) {
//     const paths = await client
//       .fetch('*[_type == "post" && defined(slug)].slug.current')
//       .then(data =>
//         data.reduce(
//           (acc, slug) => ({
//             '/': { page: '/' },
//             ...acc,
//             [`/post/${slug}`]: { page: '/post/[slug]', query: { slug } }
//           }),
//           defaultPathMap
//         )
//       )
//       .catch(console.error)
//     return paths
//   },
  experimental: {css: true}
}

  
