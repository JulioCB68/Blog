import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../@types/post';
import { posts } from '../../data/posts';

import * as path from '../../utils/routes'

import { FiUser, FiArrowLeft } from 'react-icons/fi';

import { Container, WrapperHeader, WrapperContent, AuthorContainer, Content, Title, Photo, Text } from './styles';
import { Link } from 'react-router-dom';

export const PostDescription = () => {
  const { id } = useParams<{ id: string; }>();

  const [Allposts, setAllPosts] = useState<Post[]>(posts)
  const [post, setPost] = useState<Post[]>()

  const data = Allposts.filter((post) => post.id === id)

  return (
    <>
      {data.map((item) => (
        <Container>
          <WrapperHeader>
            <AuthorContainer border color={item.tag.color}>
              <div className='AuthorPhoto'>
                <Photo><FiUser size={20} /></Photo>
                <div className='AuthorInfo'>
                  <Title> {item.author} </Title>
                  {item.updatedAt.day && <Text color='#737380'> {item.updatedAt.mounth} {item.updatedAt.day} · 4 min read </Text>}
                  {!item.updatedAt.day && <Text color='#737380'> {item.createdAt.mounth} {item.createdAt.day} · 3 min read </Text>}
                </div>
              </div>
              <Link to={path.HOME}>
                <FiArrowLeft size={20} color="#000000" />
              </Link>
            </AuthorContainer>
            <img src={item.cover} alt='Post' />
            <Content>
              <h1> {item.title} </h1>
              <div>
                <h4> #{item.tag.title} </h4>
                {item.trend_topics && <h4> #trending_topics </h4>}
              </div>
            </Content>
          </WrapperHeader>

          <WrapperContent>
            <Text> {item.post} </Text>
          </WrapperContent>
        </Container>
      ))}
    </>
  );
}