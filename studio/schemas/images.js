export default {
    name: 'images',
    title: 'Additional Images',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: "Name of Image / What it's for",
        type: 'string'
      },
      {
        name: "image",
        type: "image",
        title: "Image"
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
