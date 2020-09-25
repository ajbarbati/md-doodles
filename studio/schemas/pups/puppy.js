import breed from "./breed"

export default {
    name: 'puppy',
    title: 'Add a Puppy',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: "image",
        type: "image",
        title: "Image of Puppy",
        validation: Rule => Rule.required()
      },
      {
        title: 'ON for Available | OFF for Sold',
        name: 'available',
        type: 'boolean',
        validation: Rule => Rule.required()
      },
      {
        title: 'Make it Featured?',
        name: 'featured',
        type: 'boolean',
        validation: Rule => Rule.required()
      }, 
      {
        name: 'sex',
        title: 'Male or Female',
        type: "string",
        options: {
        list: [
          {title: 'Male', value: 'Male'},
          {title: 'Female', value: 'Female'}
        ],
        layout: 'radio',
        direction: "horizontal"
        }
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
        name: 'litter',
        title: 'Litter',
        type: 'reference',
        to: {type: 'litter'},
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
      // prepare(title, subtitle0, subtitle1, subtitle2, medis) {
      //   const subtitles = (subtitle0 + subtitle1 + subtitle2)
      //   const subtit = subtitles.join(", ")
      //   return {
      //     title: 'title',
      //     subtitle: subtitles,
      //     media: 'image'
      //   }
      // }
    }
  }
  