import { useContext } from 'react';

export default function Header() {
  // 첫 렌더링시 스크롤값 나오고 스크롤시에도 체크

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return <header>헤더</header>;
}
