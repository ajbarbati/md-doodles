export default {
    name: 'info',
    title: 'Procedure/Health/Environment etc.',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title of Info Section. Example: "Covid 19 Info"',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: "image",
        type: "image",
        title: "Image for Info Section. Example: a picture of a virus",
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'body',
        title: 'Main Information. Example: "Covid 19 is a deadly virus and...."',
        type: 'localeBlockContent',
        validation: Rule => Rule.required()
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: `breedSelect`,
        media: 'image'
      },
    }
  }
  