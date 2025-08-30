export default {
  name: 'hero_images',
  title: 'Add Hero Images',
  type: 'document',
  fields: [
    {
      name: 'image_name',
      type: 'string',
      title: 'Image Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Add Hero Images',
      options: {
        hotspot: true,
      },
    },
  ],
}
