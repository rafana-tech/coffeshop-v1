export default {
  name: "Experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Experience Title",
      type: "string",
    },
    {
      name: "italicTitle",
      title: "Italic Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};
