import Login from "@/components/login";
import styles from '/app/page.module.css'
import Sidebar from "@/components/sidebar";

function login() {
  return (
       
        <div className={styles.main}>
        <Login/>
       
      </div>
  );
}
export default login;
