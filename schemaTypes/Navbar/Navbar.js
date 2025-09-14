export default {
  name: 'navbar',
  title: 'Website Navbar',
  type: 'document',
  fields: [
    {
      name: 'leftLinks',
      title: 'Left Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Link Label'},
            {name: 'href', type: 'string', title: 'Link URL'},
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    },
    {
      name: 'logo',
      title: 'Center Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rightLinks',
      title: 'Right Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Link Label'},
            {name: 'href', type: 'string', title: 'Link URL'},
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'logo',
      left: 'leftLinks.0.label',
      right: 'rightLinks.0.label',
    },
    prepare({media, left, right}) {
      return {
        title: 'Website Navbar',
        subtitle: `Left: ${left || 'none'} | Right: ${right || 'none'}`,
        media,
      }
    },
  },
}
