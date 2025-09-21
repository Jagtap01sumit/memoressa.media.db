export default {
  name: 'reviewsGroup',
  title: 'Review Groups',
  type: 'document',
  fields: [
    {
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
      description: 'Example: Wedding Client Reviews, Commercial Reviews',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Review Title',
              type: 'string',
            },
            {
              name: 'review',
              title: 'Review Text',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5).required(),
            },
            {
              name: 'image',
              title: 'Customer Image',
              type: 'image',
              options: {hotspot: true},
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'name',
              media: 'image',
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Untitled Review',
                subtitle: subtitle ? `by ${subtitle}` : 'Anonymous',
                media,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'groupTitle',
      firstReviewer: 'reviews.0.name',
      media: 'reviews.0.image',
    },
    prepare({title, firstReviewer, media}) {
      return {
        title: title || 'Review Group',
        subtitle: firstReviewer ? `First review by ${firstReviewer}` : 'No reviews yet',
        media,
      }
    },
  },
}
