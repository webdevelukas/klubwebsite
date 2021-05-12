import React from "react";
import styled from "styled-components";
import LinkListItem from "./LinkListItem";

const linkList = [
  {
    title: "Abteilungen",
    items: ["Fußball", "Tennis", "Gymnastik", "Stockschschießen"],
  },
  {
    title: "Starkbierfest",
    items: ["Chronik", "Tickets"],
  },
  {
    title: { name: "Verein", url: "/verein" },
    items: [
      { name: "Aktuelle Termine", url: "/verein/events" },
      { name: "Vorstandschaft", url: "/verein/vorstand" },
      { name: "Kontakt", url: "/verein/kontakt" },
      { name: "Anfahrt", url: "/verein/anfahrt" },
      { name: "Satzung", url: "/verein/satzung" },
      { name: "Vereinszeitung", url: "/verein/vereinszeitung" },
    ],
  },
];

function LinkList() {
  return (
    <TopLinkList>
      {linkList.map(({ title, items }, index) => (
        <React.Fragment key={index}>
          <LinkListItem listItem={title} />
          <SubLinkList>
            {items.map((item, index) => (
              <LinkListItem key={index} listItem={item} />
            ))}
          </SubLinkList>
        </React.Fragment>
      ))}
    </TopLinkList>
  );
}
export default LinkList;
const TopLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  column-count: 2;
`;
const SubLinkList = styled.ul`
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
  font-weight: 100;
  > li {
    line-height: 1.375rem;
  }
`;
