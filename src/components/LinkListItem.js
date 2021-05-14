import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

function LinkListItem({ listItem }) {
  return (
    <>
      {listItem.url && (
        <ListItem>
          <NextLink href={listItem.url}>
            <a>{listItem.name}</a>
          </NextLink>
        </ListItem>
      )}
      {!listItem.url && <ListItem>{listItem.name}</ListItem>}
    </>
  );
}
export default LinkListItem;

const ListItem = styled.li`
  cursor: pointer;
`;
