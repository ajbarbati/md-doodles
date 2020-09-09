export default {
    name: 'breedType',
    title: '- - - Breed Type',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      }
    ]
  }