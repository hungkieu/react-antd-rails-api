import { Layout as AntLayout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { currentUser } from "utils";

import styles from "./styles.module.css";

const Layout = () => {
  const { Header, Content, Footer } = AntLayout;
  const location = useLocation();
  const navigate = useNavigate();
  let items = [];

  if (currentUser()) {
    items = [
      { key: 1, label: "Home", path: "/" },
      { key: 2, label: "Sign Out", path: "/sign_out" },
    ];
  } else {
    items = [
      { key: 1, label: "Sign In", path: "/sign_in" },
      { key: 2, label: "Sign Up", path: "/sign_up" },
    ];
  }

  const menuOnSelect = ({ key }) => {
    const path = items.find((item) => item.key.toString() === key)?.path;
    if (path) navigate(path);
  };

  const menuDefaultKey = () =>
    items.find((item) => location.pathname.includes(item.path))?.key.toString();

  return (
    <AntLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[menuDefaultKey()]}
          items={items}
          onSelect={menuOnSelect}
        />
      </Header>

      <Content style={{ padding: "0 50px" }}>
        <div className={styles.content}>
          <Outlet></Outlet>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;
