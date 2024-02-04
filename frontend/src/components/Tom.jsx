import React from "react";
import { useGetPostsQuery } from "../store/slices/apiSlice";

const Tom = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  console.log(data);

  // if (isLoading) {
  //   content = <Spinner text="Loading..." />
  // } else if (isSuccess) {
  //   content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
  // } else if (isError) {
  //   content = <div>{error.toString()}</div>
  // }
  return <div>Tom</div>;
};

export default Tom;
