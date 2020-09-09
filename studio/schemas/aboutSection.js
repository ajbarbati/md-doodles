export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title of section about Tracie',
        type: 'string'
      },
      {
        name: "image",
        type: "image",
        title: "Image of Tracie",
        options: {
          hotspot: true // <-- Defaults to false
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'body',
        title: 'Text about Tracie',
        type: 'localeBlockContent'
      }, 
      {
        name: 'title2',
        title: 'My Divine Doodles about title',
        type: 'string'
      },
      {
        name: 'body2',
        title: 'Text about My Divine Doodles',
        type: 'localeBlockContent'
      }, 
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: `breedSelect`,
        media: 'image'
      },
    }
  }
  