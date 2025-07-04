import { baseURL } from '@/app/resources';
import { blog, person } from '@/app/resources/content';
import { Column, Heading } from '@/once-ui/components';
import { Meta, Schema } from '@/once-ui/modules';
import { Posts } from '@/components/blog/Posts';

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={blog.path}
        title={blog.title}
        description={blog.description}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s" align="center">
        {blog.title}
      </Heading>
      <Column
        textVariant="body-default-l"
        align="center"
        fillWidth
        gap="m"
        marginBottom="80"
      >
        {blog.description}
      </Column>
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
      </Column>
      <Column paddingTop="l" gap="m">
        <iframe
          src="https://imanolortega.substack.com/embed"
          width="100%"
          height="320"
          style={{ border: 'none', borderRadius: '1rem' }}
        />
      </Column>
    </Column>
  );
}
