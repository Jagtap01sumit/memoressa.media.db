export default {
  name: 'sliderimages',
  title: 'Slider Images',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Image Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Slider Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
