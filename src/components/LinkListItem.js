import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

function LinkListItem({ listItem }) {
  return (
    <>
      {listItem.url && (
        <NextLink href={listItem.url}>
          <ListItem>{listItem.name}</ListItem>
        </NextLink>
      )}
      {!listItem.url && <ListItem>{listItem.name}</ListItem>}
    </>
  );
}
export default LinkListItem;

const ListItem = styled.li``;
