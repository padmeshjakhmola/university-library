import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Section,
  Hr,
  Img,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

export default function WelcomeEmail({ message }: { message: string }) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section>
            <Row>
              <Column style={styles.logoColumn}>
                <Img
                  src="/icons/logo.svg"
                  width="40"
                  height="37"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Column>
              <Column>
                <Heading as="h2">BookWise</Heading>
              </Column>
            </Row>
          </Section>

          <Hr style={styles.hr} />

          {/* Welcome Message */}
          <Heading as="h3" style={styles.heading}>
            Welcome to BookWise, Your Reading Companion!
          </Heading>

          <Text style={styles.text}>Welcome {message},</Text>

          <Text style={styles.text}>
            Welcome to BookWise! We're excited to have you join our community of
            book enthusiasts. Explore a wide range of books, borrow with ease,
            and manage your reading journey seamlessly.
          </Text>

          {/* Login Button */}
          <Section style={styles.buttonContainer}>
            <Button style={styles.button} href="https://bookwise.com/sign-in">
              Login to BookWise
            </Button>
          </Section>

          <Text style={styles.text}>Happy reading,</Text>
          <Text style={styles.text}>The BookWise Team</Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#111827",
    color: "#E5E7EB",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#1F2937",
    padding: "30px",
    borderRadius: "10px",
  },
  logoSection: {
    display: "flex",
    flexDirection: "column" as const,
  },
  logoColumn: {
    width: "60px",
  },
  heading: {
    fontSize: "18px",
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "14px",
    color: "#D1D5DB",
    lineHeight: "1.5",
  },
  buttonContainer: {
    textAlign: "center" as const,
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#FBBF24",
    color: "#000000",
    padding: "12px 20px",
    fontSize: "12px",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "6px",
  },
  hr: {
    borderColor: "#374151",
    margin: "20px 0",
  },
};
