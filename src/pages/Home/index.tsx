import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as path from '../../utils/routes'

import {
  Container,
  Text,
  Wrapper,
  Tilte,
  SubTilte,
  PostContainer,
} from './styles';

import { posts } from '../../data/posts';
import { Post } from '../../@types/post';
import { PostComponent } from '../../components/Post/index';

import { FiMessageCircle, FiPlus } from 'react-icons/fi';
import Tag from '../../components/Tag';
import Navbar from '../../components/Navbar';

export const Home = () => {

  const [Allposts, setAllPosts] = useState<Post[]>(posts)

  const [trendTopics, setTrendTopics] = useState<Post[]>()

  useEffect(() => {
    const filterTrendingTopics = () => {
      const data = Allposts.filter((post) => post.trend_topics === true)
      setTrendTopics(data)
    }
    filterTrendingTopics()
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Tilte> Bem-vindo! </Tilte>
          <SubTilte> Fique por dentro dos assuntos mais discutidos no mundo. </SubTilte>
          <Link to={path.TRENDING_TOPICS} style={{ textDecoration: 'none', color: 'white' }}>
            <Text bold> Trending topics +{trendTopics?.length}</Text>
          </Link>

          <Tag />
          <Text><strong> {Allposts.length + 522} posts </strong> na última hora. </Text>
          <PostContainer>
            <PostComponent />
          </PostContainer>
        </Wrapper>
      </Container>
    </>
  );
}