import { Layout } from "antd";
import NewsSection from "../../components/organisms/NewsSection";
import Title from "antd/es/typography/Title";

export const Dashboard = () => {
  return (
    <Layout
      style={{
        height: window.innerHeight * 0.89,

        // backgroundColor: "#f0f2f5",
      }}
    >
      <Title level={2} style={{ textAlign: "center", color: "#1890ff" }}>
        Noticias
      </Title>
      <NewsSection />
    </Layout>
  );
};
