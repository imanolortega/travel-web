import { Grid } from '@/once-ui/components'
import Post from './Post'
import { blog } from '@/app/resources'

interface PostsProps {
  range?: [number] | [number, number]
  columns?: '1' | '2' | '3'
  thumbnail?: boolean
}

export function Posts({ columns = '1', thumbnail = false }: PostsProps) {
  const allBlogs = blog.posts

  return (
    <>
      {allBlogs.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="m"
        >
          {allBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  )
}
