export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'block',
          // 1. STYLES: Define paragraph/heading styles allowed
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            // You can add more here
          ],
          // 2. LISTS: Define the types of lists allowed
          lists: [
            {title: 'Bullet', value: 'bullet'}, // <--- FIX: Re-enables bullet points
            {title: 'Numbered', value: 'number'}  // <--- FIX: Re-enables numbered lists
          ],
          marks: {
            // 3. DECORATORS: Define inline formatting like bold/italic
            decorators: [
              {title: 'Strong', value: 'strong'}, // <--- FIX: Re-enables Bold
              {title: 'Emphasis', value: 'em'},     // <--- FIX: Re-enables Italic
              {title: 'Code', value: 'code'}        // Common to add code formatting
              // You can also add {title: 'Soft Break', value: 'br'} if you want a dedicated soft break button
            ],
            annotations: []
          }
        }
        // Add other types here if you want things like images, quotes, or code blocks inline
      ]
    },

    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: { type: 'skill'}}]
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
  ],
}
