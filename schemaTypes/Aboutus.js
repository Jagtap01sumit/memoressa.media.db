import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'subtitle', type: 'text', title: 'Subtitle'},
        {
          name: 'image',
          type: 'image',
          title: 'Hero Image',
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'subtitle',
          media: 'image',
        },
      },
    }),
    defineField({
      name: 'me',
      title: 'About Me Section',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'title', type: 'string', title: 'Role / Title'},
        {name: 'description', type: 'text', title: 'Description'},
        {
          name: 'image',
          type: 'image',
          title: 'Profile Image',
          options: {hotspot: true},
        },
      ],
      preview: {
        select: {
          title: 'name',
          subtitle: 'title',
          media: 'image',
        },
      },
    }),
    defineField({
      name: 'journey',
      title: 'Journey Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'description', type: 'text', title: 'Description'},
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'description',
        },
      },
    }),
    defineField({
      name: 'showcases',
      title: 'Showcases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {hotspot: true},
            },
            {name: 'description', type: 'text', title: 'Description'},
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'message', type: 'text', title: 'Message'},
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'phone', type: 'string', title: 'Phone'},
        {name: 'location', type: 'string', title: 'Location'},
        {
          name: 'socials',
          type: 'array',
          title: 'Social Links',
          of: [
            defineField({
              name: 'social',
              type: 'object',
              fields: [
                {name: 'name', type: 'string', title: 'Platform'},
                {name: 'url', type: 'url', title: 'URL'},
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'url',
                },
              },
            }),
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'message',
        },
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
        subtitle: 'Main content',
      }
    },
  },
})
