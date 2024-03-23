import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import ContentJson from "@/content.json";

interface RegisterEmailProps {
  studentName: string;
  studentAge: string;
  course: string;
  typeOfCourse: string;
  email: string;
  phone: string;
}

export const RegisterEmail = (props: RegisterEmailProps) => (
  <Html>
    <Head />
    {/* <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview> */}
    <Body style={main}>
      <Container style={container}>
        {/* logo goes here */}
        {/* <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          /> */}
        <Text style={paragraph}>Registration Request from Customer: </Text>

        <Text style={label}>Student Name: </Text>
        <Text>{props.studentName}</Text>

        <Text style={label}>Student Age:</Text>
        <Text>{props.studentAge}</Text>

        <Text style={label}>Course: </Text>
        <Text>{props.course}</Text>

        <Text style={label}>Course Type: </Text>
        <Text style={paragraph}>{props.typeOfCourse}</Text>

        <Text style={label}>Email: </Text>
        <Text>{props.email}</Text>

        <Text style={label}>Phone: </Text>
        <Text>{props.phone}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          {ContentJson.footer.address[0]}
          {ContentJson.footer.address[1]}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default RegisterEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const label = {
  fontWeight: "bold",
};
