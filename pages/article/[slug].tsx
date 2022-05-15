import { allArticles, Article } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

const ArticlePost = ({ article }: { article: any }) => {
  const Component = useMDXComponent(article.body.code);
  return (
    <Layout title={article.title} description={article.summary}>
      <Container classNames="article">
        <h1>Post</h1>
        <Component />
      </Container>
    </Layout>
  );
};

export default ArticlePost;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Article }) {
  const article = allArticles.find((post) => post.slug === params.slug);

  return { props: { article } };
}
