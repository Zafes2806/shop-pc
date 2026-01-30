import { Layout } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>
          Shop PC
        </Link>
      </Header>

      <Content style={{ padding: 24 }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: 'center' }}>Shop PC © {new Date().getFullYear()}</Footer>
    </Layout>
  );
}
