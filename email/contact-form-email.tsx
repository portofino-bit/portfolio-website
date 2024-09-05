//done
import React from 'react'
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components"
import{Tailwind} from "@react-email/tailwind"

type ContactFromEmailProps={
    message:string
    senderEmail:string
}

export default function ContactFormEmail({message, senderEmail,}:ContactFromEmailProps) {
  return (<Html>
    <Head/>
    <Preview>
        new message from your portfolio site
    </Preview>
    <Tailwind>
        <Body>
            <Container>
                <Section>
                    <Heading>
                        you recived the following message from cintact form
                    </Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>
                        The sender's email is:{senderEmail}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>);
}
