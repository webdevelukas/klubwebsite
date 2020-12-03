import styled from "styled-components";
import useScrollPosition from "hooks/useScrollPosition";
import useMediaQuery from "hooks/useMediaQuery";
import { MobileHeader, DesktopHeader } from "./Header";

type NavigationBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function NavigationBar({ open, setOpen }: NavigationBarProps) {
  const { headerIsVisible } = useScrollPosition();
  const [matchesMediaQuery] = useMediaQuery(`(min-width: 1100px)`);

  return (
    <Wrapper>
      {!matchesMediaQuery && (
        <MobileHeader
          open={open}
          setOpen={setOpen}
          headerIsVisible={headerIsVisible}
        />
      )}
      {matchesMediaQuery && <DesktopHeader headerIsVisible={headerIsVisible} />}
    </Wrapper>
  );
}
export default NavigationBar;

const Wrapper = styled.div`
  position: relative;
  height: 4.5rem;

  @media screen and (min-width: 1100px) {
    height: 6.5rem;
    margin-bottom: 2rem;
  }
`;
