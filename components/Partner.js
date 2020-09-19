import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ResponsiveImage from "elements/ResponsiveImage";
Partner.propTypes = {};
function Partner({ logoUrl }) {
  return (
    <Link href="https://www.elgaku.de/start/" target="_blank">
      <Image src={logoUrl} />
    </Link>
  );
}
export default Partner;
const Image = styled(ResponsiveImage)`
  object-fit: contain;
`;
const Link = styled.a`
  display: flex;
`;
