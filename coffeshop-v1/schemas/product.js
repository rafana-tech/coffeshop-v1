export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Product Image",
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
