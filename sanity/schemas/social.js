export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  __experimental_actions: ['update', 'create', 'publish', 'delete'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of Platform for social media',
      type: 'string',
    },
    {
      name: 'url',
      title: 'url',
      type: 'url',
    },
  ],
}
