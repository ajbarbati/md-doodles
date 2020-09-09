import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'pvdjrmf0', // from sanity.json
    dataset: 'production', // production is default name for public dataset
    useCdn: true // 'false' if you want fresh data
})