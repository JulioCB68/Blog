import { Link } from 'react-router-dom';

import { Post } from '../../types/post';

import { Container, Content, Text, Title } from './styles';

import { limitString } from '../../utils/limitString';

type PostProps = {
  posts: Post,
}

export const PostComponent = ({ posts }: PostProps) => {
  return (
    <>
      <Container key={posts.id}>
        <Link to={`/post/${posts.id}`}
          style={{ textDecoration: 'none', color: '#13131A' }}>
          <img src={posts.cover} alt='post' />
          <Content>
            <div className='info'>
              <Text size='.75rem'>{posts.tag.title} ·</Text>
              {posts.updatedAt.day &&
                <Text size='.75rem'>{posts.updatedAt.mounth} {posts.updatedAt.day}, {posts.updatedAt.year}</Text>
              }
              {!posts.updatedAt.day &&
                <Text size='.75rem'>{posts.createdAt.mounth} {posts.createdAt.day}, {posts.createdAt.year}</Text>
              }
            </div>
            <Title> {limitString(posts.title, 83)} </Title>
            <Text> {limitString(posts.post, 168)} </Text>
          </Content>
        </Link>
      </Container>
    </>
  );
}