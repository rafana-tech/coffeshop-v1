export default {
  name: "cafeInfo",
  title: "Cafe Details",
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
      name: "icon",
      title: "Icon Website",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "titleWeb",
      title: "Nama Title Website",
      type: "string",
    },
    {
      name: "title",
      title: "Nama Caffe",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "blockContent",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "welcomeTitle",
      title: "About Cafe Italic",
      type: "string",
    },
    {
      name: "aboutUs",
      title: "About Cafe",
      type: "blockContent",
    },
    {
      name: "openHours",
      title: "Open Hours",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
