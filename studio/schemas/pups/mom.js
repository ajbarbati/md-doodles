export default {
    name: 'mom',
    title: 'Add a Mom',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        title: 'Mom Image',
        name: 'image',
        type: 'image',
        validation: Rule => Rule.required()
      },
      {
        name: 'breedSelect',
        title: 'Pick a Breed',
        type: "string",
        options: {
        list: [
          {title: 'Golden Doodle', value: 'Golden Doodle'},
          {title: 'Sheepa Doodle', value: 'Sheepa Doodle'},
          {title: 'Berne Doodle', value: 'Berne Doodle'}
        ],
        layout: 'radio',
        direction: "horizontal"
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'breedType',
        title: 'Mini or Standard',
        type: "string",
        options: {
        list: [
          {title: 'Mini', value: 'Mini'},
          {title: 'Standard', value: 'Standard'}
        ],
        layout: 'radio',
        direction: "horizontal"
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'body',
        title: 'Mom Description',
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
        subtitle: `breedSelect.title`,
        media: 'image'
      },
    }
  }
  