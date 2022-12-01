export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "background",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};
