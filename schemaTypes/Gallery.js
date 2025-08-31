export default {
  name: 'gallerycards',
  title: 'Gallery Card Details',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Card title',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'services'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Event Date',
      name: 'eventDate',
      type: 'date',
    },
    {
      title: 'Select Background Image for card',
      name: 'bgImage',
      type: 'image',
    },
    {
      title: 'Gallery Grid Images',
      name: 'galleryImages',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
