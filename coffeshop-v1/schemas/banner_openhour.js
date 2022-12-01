export default {
  name: "bannerOpenHours",
  title: "Banner Open Hours",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "background",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};
