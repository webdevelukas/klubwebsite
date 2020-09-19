import React from "react";
import PropTypes from "prop-types";
TeamPage.propTypes = {};
const teams = [
  "herren-1",
  "2. Mannschaft",
  "U15-Junioren",
  "U13-Junioren",
  "U11-Junioren",
  "U9-Junioren",
  "U7-Junioren",
  "Alte Herren",
];
function TeamPage({ team }) {
  return <div>{team}</div>;
}
export async function getStaticPaths() {
  const paths = teams.map((team) => ({
    params: {
      department: "fussball",
      team,
    },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const { team, department } = params;
  return { props: { team, department } };
}
export default TeamPage;
