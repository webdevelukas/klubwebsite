async function fetchAPI(query, { variables } = {}) {
  const response = await fetch(`http://localhost:1337/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await response.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
export async function getPosts() {
  const data = await fetchAPI(`
  {
    posts(sort: "eventdatum:desc") {
      title
      eventdatum
      content
      titelbild {url}
      team {name}
      abteilung {name}
    }
  }
  `);
  return data?.posts;
}
export async function getSingleType(singleType) {
  const data = await fetchAPI(`
  {
    ${singleType} {
      title
      content
    }
  }
  `);
  return data[singleType];
}
