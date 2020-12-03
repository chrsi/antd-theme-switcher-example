import { Layout, Typography, Button } from 'antd';
import { useState } from 'react';
import './App.css'

const { Content } = Layout;
const { Title } = Typography;

const themeTexts = {
  'light': {
    titleText: 'Good morning 🌤',
    buttonText: 'Change to dark',
  },
  'dark': {
    titleText: 'Good night 🌔',
    buttonText: 'Change to light',
  }
}

function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Layout>
      <Content className="content">
        <Title>{themeTexts[theme].titleText}</Title>
        <Button type="primary" onClick={changeTheme}>{themeTexts[theme].buttonText}</Button>
      </Content>
    </Layout>
  );
}

export default App;
