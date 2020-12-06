import { Layout, Typography, Button } from 'antd';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    downloadTheme(theme);
  })

  const downloadTheme = (theme) => {
    if (theme === 'light') {
      return import('./theme.light.less');
    } else {
      return import('./theme.dark.less');
    }
  }

  const changeTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    downloadTheme(nextTheme).then(() => {
        setTheme(nextTheme);
    });
  }

  return (
    <Layout className={theme}>
      <Content className="content">
        <Title>{themeTexts[theme].titleText}</Title>
        <Button type="primary" onClick={changeTheme}>{themeTexts[theme].buttonText}</Button>
      </Content>
    </Layout>
  );
}

export default App;
