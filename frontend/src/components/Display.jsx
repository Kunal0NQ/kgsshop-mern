import React from 'react';
import { useGetPostsQuery } from '../store/slices/apiSlice';

function DisplayPost({ post }) {
  return (
    <article className="post-excerpt" key={post.id}>
    <h3 className=''>{post.title}</h3>
    {/* <div>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
    </div>
    <p className="post-content">{post.content.substring(0, 100)}</p>

    <ReactionButtons post={post} />
    <Link to={`/posts/${post.id}`} className="button muted-button">
      View Post
    </Link> */}
  </article>
  );
}

export default function DisplayList() {
  // const { data, error, isLoading } = useGetPostsQuery();
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  let content;

  // if (isLoading) {
  //   // content = <Spinner text="Loading..." />
  //   console.log('loding...')
  // } else if (isSuccess) {
  //   content = posts.map(post => <DisplayPost key={post.id} post={post} />)
  // } else if (isError) {
  //   content = <div>{error.toString()}</div>
  // }
  content =
    posts && posts.map((post) => <DisplayPost key={post.id} post={post} />);
  console.log(`Content: ${content}`);

  return (
    <section className='posts-list'>
      <h2 className='font-semibold text-lg'>Posts</h2>
      {content}
    </section>
  );
}
