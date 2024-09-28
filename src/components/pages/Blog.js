import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Whaaadduuup!",
      date: "September 28, 2024",
      excerpt: "The beginning of a new era.",
      content: "Here we go! This is the start of a new era for me. I'm excited to share my journey with you all.",
    },
  ];

  return (
    <section id="blog">
      <h2>My Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p className="post-excerpt">{post.excerpt}</p>
            <a href={`#post-${post.id}`}>Read more</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
