import Link from 'next/link';
import styles from '/app/page.module.css'

 function singin() {
  return (
    <div >
    <div>
      <form action="" >
        <div className={styles.formul}>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>name</label>
          <input type="email"  className={styles.input} placeholder="Enter email" />
        </div>
        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>Email</label>
          <input type="password" className={styles.input} placeholder="Enter password" />
        </div>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>number</label>
          <input type="email"  className={styles.input} placeholder="Enter email" />
        </div>
        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" className={styles.input} placeholder="Enter password" />
        </div>
        <div className={styles.group}>
          <label htmlFor="password" className={styles.label}>confirm password</label>
          <input type="password" className={styles.input} placeholder="Enter password" />
        </div>
        </div>
        <div className={styles.groupBnt}>
        <button className={styles.btn}>singin</button>
        <Link  href="/login"><button className={styles.btn}>i have account</button></Link>
        </div>
      </form>
      
    </div>
</div>
  )
}
export default singin;