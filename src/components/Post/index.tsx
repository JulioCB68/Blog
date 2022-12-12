import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../@types/post';
import { posts } from '../../data/posts';

import { Container, Content, Text, Title } from './styles';

import { limitString } from '../../utils/limitString';

export const PostComponent = () => {
  const [Allposts, setAllPosts] = useState<Post[]>(posts)

  return (
    <>
      {Allposts?.map((item) => (
        <Container key={item.id}>
          <Link to={`/post/${item.id}`}
            style={{ textDecoration: 'none', color: '#13131A' }}>
            <img src={item.cover} alt='post' />
            <Content>
              <div className='info'>
                <Text size='.75rem'>{item.tag.title} ·</Text>
                {item.updatedAt.day &&
                  <Text size='.75rem'>{item.updatedAt.mounth} {item.updatedAt.day}, {item.updatedAt.year}</Text>
                }
                {!item.updatedAt.day &&
                  <Text size='.75rem'>{item.createdAt.mounth} {item.createdAt.day}, {item.createdAt.year}</Text>
                }
              </div>
              <Title> {limitString(item.title, 83)} </Title>
              <Text> {limitString(item.post, 168)} </Text>
            </Content>
          </Link>
        </Container>
      ))}
    </>
  );
}