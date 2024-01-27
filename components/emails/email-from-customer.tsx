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



interface EMailFromCustomerProps {
  username: string;
  email: string;
  subject: string
  usermessage: string
}


export const EMailFromCustomer = (props: EMailFromCustomerProps) => (
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
        <Text style={paragraph}>Query from Customer: </Text>

        <Text style={label}>Name: </Text>
        <Text>{props.username}</Text>
        
        <Text style={label}>Email:</Text>
        <Text>{props.email}</Text>
        
        <Text style={label}>Subject: </Text>
        <Text>{props.subject}</Text>

        <Text style={label}>Message: </Text>
        <Text style={paragraph}>{props.usermessage}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          Baroque Music, SVS Windgates, 13th Cross Street, Horamavu Agara, Babausapalya near Kalyan Nagar, Bangalore - 560043
        </Text>
      </Container>
    </Body>
  </Html>
);


export default EMailFromCustomer;

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
  fontWeight: 'bold'
}