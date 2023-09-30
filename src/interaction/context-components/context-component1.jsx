import Heading from "./heading-component";
import Section from "./section-component";

const Page = () => {
    return (
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Section>
                        <Heading>Heading</Heading>
                        <Heading>Heading</Heading>
                        <Heading>Heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}

export default Page;