import {
  Container,
  PostContainer,
} from './styles';

import { PostComponent } from '../../components/Post/index';
import { MainPost } from '../../components/Post/MainPost';

export const Home = () => {
  return (
    <>
      <Container>
        <MainPost />
        <PostContainer>
          <PostComponent />
        </PostContainer>
      </Container>
    </>
  );
}