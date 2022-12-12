import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as path from '../../utils/routes'

import {
  Container,
  PostContainer,
  Text,
  Wrapper,
  Tilte,
  SubTilte,
} from './styles';

import { posts } from '../../data/posts';
import { Post } from '../../@types/post';
import { PostComponent } from '../../components/Post/index';

import { FiMessageCircle, FiPlus } from 'react-icons/fi';
import Tag from '../../components/Tag';

export const Home = () => {

  const [Allposts, setAllPosts] = useState<Post[]>(posts)

  useEffect(() => {
    const filterTrendingTopics = () => {
      const data = Allposts.filter((post) => post.trend_topics === true)
      // setTrendTopics(data)
    }
    filterTrendingTopics()
  }, [])

  return (
    <>
      <Container>
        <PostContainer>
          <PostComponent />
        </PostContainer>
      </Container>
    </>
  );
}