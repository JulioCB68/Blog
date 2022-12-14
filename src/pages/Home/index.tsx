import { useState } from 'react';

import { Post } from '../../types/post';
import { posts } from '../../data/posts';

import { PostComponent } from '../../components/Post/index';
import { MainPost } from '../../components/Post/MainPost';

import {
  Container,
  PostContainer,
} from './styles';

export const Home = () => {
  const [allposts, setAllPosts] = useState<Post[]>(posts)
  return (
    <>
      <Container>
        <MainPost />
        <PostContainer>
          {allposts.map((item, index) => (
            <PostComponent key={index} posts={item}/>
          ))}
        </PostContainer>
      </Container>
    </>
  );
}