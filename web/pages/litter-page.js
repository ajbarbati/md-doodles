// NEED TO USE THIS FOR INDIVIDUAL LITTER PAGE

function Home({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }