// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import caffeInfo from "./caffeInfo";
import home from "./home";
import banner from "./banner";
import gallery from "./gallery";
import experience from "./experience";
import visitUs from "./visitUs";
import category from "./category";
import social from "./socialInfo";
import product from "./product";
import menuTitle from "./menuTitle";
import service from "./service";

// import localeString from "./locale/String";
// import localeText from "./locale/Text";
import localeBlockContent from "./blockContent";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    localeBlockContent,
    caffeInfo,
    home,
    service,
    banner,
    experience,
    visitUs,
    menuTitle,
    gallery,
    category,
    product,
    social,
    // localeText,

    // localeString,
  ]),
});
