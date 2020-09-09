export default {
    name: 'testimonial',
    title: 'Customer Testimonials',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Name of Person / Family Name',
        type: 'string'
      },

      {
        name: "image",
        type: "image",
        title: "Image of Puppy and Owner(s)"
      },
      {
        title: 'Make it Featured?',
        name: 'featured',
        type: 'boolean'
      }, 
      {
        name: 'body',
        title: 'Story',
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
        media: 'image'
      }
    }
  }
  