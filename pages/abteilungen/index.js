import React from "react";
import PropTypes from "prop-types";
import BlogPost from "components/BlogPost";
import NewsContainer from "components/NewsContainer";
import { getBlogposts } from "../../lib/api";
DepartmentsPage.propTypes = {};
function DepartmentsPage({ blogposts }) {
  return (
    <>
      <BlogPost blogposts={blogposts} />
      <NewsContainer blogposts={blogposts} />
    </>
  );
}
export default DepartmentsPage;
DepartmentsPage.getInitialProps = async (ctx) => {
  const blogposts = await getBlogposts();
  return { blogposts };
};
