import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { posts } from '../../data/posts';
import { Post } from '../../types/post';

import { PostComponent } from '../../components/Post';

import Image from '../../assets/images/notFound.svg'

import { PostContainer } from '../Home/styles';
import { Container, TagText } from './styles';

export const Category = () => {
  const { tag } = useParams<{ tag: string; }>();

  const [allposts, setAllPosts] = useState<Post[]>(posts)

  const data = allposts.filter((post) => post.tag.title === tag)

  return (
    <>
      <Container>
        {data.length > 1 ?
          <>
            <TagText> {tag} </TagText>
            <PostContainer>
              {data.map((item, index) => (
                <PostComponent key={index} posts={item} />
              ))}
            </PostContainer>
          </>
          :
          <Container>
            <TagText> We couldn’t find any posts with the keyword " {tag} ". Please try another keyword. </TagText>
            <img src={Image} alt="No Result" />
          </Container>
        }
      </Container>
    </>
  );
} 