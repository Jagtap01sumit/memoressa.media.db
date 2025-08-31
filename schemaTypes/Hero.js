export default {
  name: 'hero',
  title: 'Hero Details',
  type: 'document',
  fields: [
    {
      name: 'Title',
      type: 'string',
      title: 'Title For Main Page',
    },
    {
      name: 'Paragraph',
      type: 'text',
      title: 'Paragraph For Main Page',
    },
    {
      title: 'Select Hero Image',
      name: 'heroImage',
      type: 'reference',
      to: [{type: 'hero_images'}],
    },
    {
      name: 'Home_Intro_Title',
      type: 'string',
      title: 'Enter Home Intro Title',
    },
    {
      name: 'Home_Intro_Para',
      type: 'text',
      title: 'Paragraph For Home Intro',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo Image on Navbar',
    },
  ],
}
