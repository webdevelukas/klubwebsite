import NextImage from "next/image";
import { Partner } from "types/partners";

type PartnerProps = {
  partner: Partner;
};

function PartnerComponent({ partner }: PartnerProps) {
  const { logo, url } = partner;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <NextImage
        src={logo.url}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        quality={100}
        layout="responsive"
      />
    </a>
  );
}

export default PartnerComponent;
