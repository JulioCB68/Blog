import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { posts } from '../../../data/posts';

import { Post } from '../../../types/post';

import { limitString } from '../../../utils/limitString';

import { Container, Content, Text, TextPost, Title } from './styles';

export const MainPost = () => {
  const [Allposts, setAllPosts] = useState<Post[]>(posts);

  const randomId = String(Math.floor(Math.random() * 21))

  const filterTrendingTopics = Allposts.filter((post) => post.id === randomId);

  return (
    <>
      {filterTrendingTopics?.map((item) => (
        <Container key={item.id}>
          <Link to={`/post/${item.id}`}
            style={{ textDecoration: 'none', color: '#13131A' }}>
            <div className='Wrapper'>
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
                <TextPost> {item.post} </TextPost>
              </Content>
            </div>
          </Link>
        </Container>
      ))}
    </>
  );
}