import { FC } from 'react'
import Link from 'next/link';
import { GitHub, Twitter } from '@material-ui/icons';


export const HomePage: FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the application.</p>
      <div>
        <h2>Explore:</h2>
        <ul>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/product">
              Product
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Connect:</h2>
          <GitHub />
          <Twitter />
      </div>
    </div>
  )
}

export default HomePage
