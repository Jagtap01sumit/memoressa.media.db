export default {
  name: 'services',
  title: 'Service Card Details',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Card title',
    },
    {
      title: 'Select Background Image for card',
      name: 'bgImage',
      type: 'image',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Select Logo for the card (please remove background from the logo img)',
    },
  ],
}
