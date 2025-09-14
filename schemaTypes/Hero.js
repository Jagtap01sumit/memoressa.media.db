export default {
  name: 'page',
  title: 'Website Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'heading', type: 'string', title: 'Heading'},
        {name: 'paragraph', type: 'text', title: 'Paragraph'},
        {name: 'image', type: 'image', title: 'Hero Image'},
        {name: 'introTitle', type: 'string', title: 'Intro Title (below image)'},
        {name: 'introPara', type: 'text', title: 'Intro Paragraph (below image)'},
      ],
    },
    {
      name: 'services',
      title: 'Service Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'services'}]}],
    },
    {
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
  ],
}
