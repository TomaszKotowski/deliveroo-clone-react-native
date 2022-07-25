export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of the Category",
      type: "image",
    },
  ],
};
