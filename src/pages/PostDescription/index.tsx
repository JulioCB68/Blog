import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../types/post';
import { posts } from '../../data/posts';

import * as path from '../../utils/routes'

import { MdWest, MdOutlinePersonOutline } from "react-icons/md";

import { Container, Hero, AuthorContainer, Content, Title, Photo, Text } from './styles';
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
          <Hero>
          <AuthorContainer>
            <div className='AuthorPhoto'>
              <Photo><MdOutlinePersonOutline size={26} /></Photo>
              <div className='AuthorInfo'>
                <Title> {item.author} </Title>
                {item.updatedAt.day && <Text size={true}> {item.updatedAt.mounth} {item.updatedAt.day} · 4 min read </Text>}
                {!item.updatedAt.day && <Text size={true}> {item.createdAt.mounth} {item.createdAt.day} · 3 min read </Text>}
              </div>
            </div>
            <Link to={path.HOME}>
              <MdWest size={24} color='#FFFFFF' />
            </Link>
          </AuthorContainer>
            <h1> {item.title} </h1>
          </Hero>
          <Content>
            <img src={item.cover} alt='Post' />
            <div className='HeroInfo'>
              <h4> #{item.tag.title} </h4>
              {item.trend_topics && <h4> #trending_topics </h4>}
            </div>
            <Text> {item.post} </Text>
          </Content>
        </Container>
      ))}
    </>
  );
}