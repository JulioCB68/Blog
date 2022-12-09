import { useState } from 'react';

import { Post } from '../../@types/post';
import { posts } from '../../data/posts';

import { Container } from './styles';

const Tag = () => {
  const [Allposts, setAllPosts] = useState<Post[]>(posts)

  const findDataRepeted = () => {
    const data = Allposts.map((item) => (item.tag))
    const newData = data.filter((item, i) => data.indexOf(item) === i);
    return newData?.map((item, index) => (
      <h4 key={index} color={item.color}>
        #{item.title}
      </h4>
    ))
  }

  return (
    <Container>
      {findDataRepeted()}
    </Container>
  );
}

export default Tag;