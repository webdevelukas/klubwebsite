import useForm from "hooks/useForm";
import {
  Form,
  Input,
  Button,
  Select,
  TextArea,
  Checkbox,
} from "components/form";
import styled from "styled-components";
import Map from "components/maps/Map";
import PageSection from "elements/PageSection";

function ContactPage() {
  const { handleChange, handleSubmit, values, errors } = useForm(contact);

  function contact() {
    console.log("No errors, submit callback called!");
  }

  return (
    <Container>
      <ContentContainer>
        <Headline>Kontaktiere uns</Headline>
        <p>
          Bitte beachte, dass alle Felder die mit einem * (Stern) gekennzeichnet
          sind Pflichtfelder sind. Damit stellen wir sicher, dass deine
          Nachricht an der richtigen Stelle landet und wir dir schnellstmöglich
          weiterhelfen können. <br />
          <b>Wir freuen uns auf deine Nachricht!</b>
        </p>
        <Form onSubmit={handleSubmit} noValidate>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Dein Name"
            required
            label="Name"
            onChange={handleChange}
            value={values.name || ""}
            error={errors.name}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Deine E-Mail Adresse"
            required
            label="E-Mail Adresse"
            onChange={handleChange}
            value={values.email || ""}
            error={errors.email}
          />
          <Select
            id="subject"
            name="subject"
            placeholder="Bitte wähle deinen Betreff"
            required
            label="Betreff"
            onChange={handleChange}
            value={values.subject || ""}
            error={errors.subject}
            options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
          />
          <TextArea
            id="message"
            name="message"
            placeholder="Deine Nachricht"
            required
            label="Nachricht"
            onChange={handleChange}
            value={values.message || ""}
            error={errors.message}
          />
          <Checkbox
            name="privacy"
            id="privacy"
            required
            label="Datenschutz"
            error={errors.privacy}
          />
          <Button>Jetzt absenden {">"}</Button>
        </Form>
      </ContentContainer>
      <Aside>
        <PageSection title="Anschrift">
          <Address>
            <b>TSV Paunzhausen e. V.</b> <br />
            Walterskirchener Str. 26
            <br /> 85307 Paunzhausen
          </Address>
        </PageSection>
        <Map title="Anfahrt" />
      </Aside>
    </Container>
  );
}
export default ContactPage;

export async function getStaticProps() {
  return { props: {} };
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  align-items: start;
  row-gap: 2rem;
  max-width: var(--max-content-width);
  margin: 0 auto;
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
    padding-top: var(--large-spacing);
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 2rem;
  padding: var(--large-spacing) var(--medium-spacing);
  background-color: var(--content-background);

  @media screen and (min-width: 1100px) {
    padding: var(--large-spacing);
  }
`;

const Headline = styled.h1`
  color: var(--main-color);
  text-transform: uppercase;
  font-size: 2rem;
`;

const Aside = styled.aside`
  display: grid;
  row-gap: var(--large-spacing);
`;

const Address = styled.p`
  background-color: var(--content-background);
  padding: var(--medium-spacing) var(--medium-spacing) var(--large-spacing);
`;
