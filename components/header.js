import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const name = "Dan";

export default function Header() {
    return (
        <header className={styles.header}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>

      </header>
    )
}
