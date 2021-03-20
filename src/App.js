import { Layout, Typography, Button } from 'antd';
import { useEffect, useState } from 'react';
import './App.css'
import './theme.dark.less';
import './theme.light.less';

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
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme])

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
