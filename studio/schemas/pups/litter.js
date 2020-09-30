export default {
    name: 'litter',
    title: 'Create a litter',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'dob',
        title: 'Born On',
        type: 'date',
        validation: Rule => Rule.required()
      },
      {
        name: 'dateA',
        title: 'Date Available',
        type: 'date',
        validation: Rule => Rule.required()
      },
      {
        name: "image",
        type: "image",
        title: "Image of Puppy",
        options: {
          hotspot: true // <-- Defaults to false
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'mom',
        title: 'Mother',
        type: 'reference',
        to: {type: 'mom'},
        validation: Rule => Rule.required()
      },
      {
        name: 'dad',
        title: 'Father',
        type: 'reference',
        to: {type: 'dad'},
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
        title: 'Available?',
        name: 'featured',
        type: 'boolean',
        validation: Rule => Rule.required()
      }, 
      {
        name: 'body',
        title: 'Litter Description',
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
        subtitle: `date`,
        media: 'image'
      },
    }
  }