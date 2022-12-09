import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../@types/post';
import { posts } from '../../data/posts';

import { Container, Wrapper, Text, Title, Footer } from './styles';
import { AuthorContainer, Photo } from '../../pages/PostDescription/styles';

import { FiArrowRight, FiUser } from 'react-icons/fi';
import { limitString } from '../../utils/limitString';

export const PostComponent = () => {
  const [Allposts, setAllPosts] = useState<Post[]>(posts)

  return (
    <>
      {Allposts?.map((item) => (
        <Container key={item.id} color={item.tag?.color}>
          <Link to={`/post/${item.id}`}
            style={{ textDecoration: 'none', color: '#13131A' }}>
            <img src={item.cover} alt='post' />
            <Wrapper>
              <Text size=".75rem" color=""> #{item.tag?.title} </Text>
              <Title> {limitString(item.title, 59)} </Title>
            </Wrapper>
            <Footer>
              <AuthorContainer>
                <div className='AuthorPhoto'>
                  <Photo><FiUser size={20} /></Photo>
                  <div className='AuthorInfo'>
                    <Text size=".75rem" color=""> {item.author} </Text>
                    <Text size=".75rem" color=""> {item.createdAt.mounth} {item.createdAt.day}, {item.createdAt.year} </Text>
                  </div>
                </div>
              </AuthorContainer>
              <FiArrowRight size={20} color="#13131A" />
            </Footer>
          </Link>
        </Container>
      ))}
    </>
  );
}