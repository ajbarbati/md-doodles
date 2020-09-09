export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Question',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Answer',
        type: 'text'
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
    ]
  }