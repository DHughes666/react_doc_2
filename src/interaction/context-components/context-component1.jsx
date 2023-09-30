import Heading from "./heading-component";
import Section from "./section-component";

const Page = () => {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post 
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </Section>
    )
}

const AllPosts = () => {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    )
}

const RecentPosts = () => {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post 
                title="Flavours of Lisbon"
                body="...those pasteis de nata!"
            />
            <Post 
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    )
}

const Post = ({ title, body }) => {
    return (
        <Section isFancy={true}>
            <Heading>{title}</Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}

export default Page;