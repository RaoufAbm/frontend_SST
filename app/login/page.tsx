import Login from "@/components/login";
import styles from '/app/page.module.css'
import Sidebar from "@/components/sidebar";

function login() {
  return (
       
        <div className={styles.main}>
      <div className={styles.wast}>
        <Login/>
      </div>
        <div className={styles.SideBar}>
                <Sidebar/>

      </div>
       
      </div>
  );
}
export default login;
