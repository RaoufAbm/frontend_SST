import Singin from "@/components/singin";
import styles from "/app/page.module.css";
import Sidebar from "@/components/sidebar";

function singin() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.titre}>singin</h1>
        <Singin />
      </div>
      <div className={styles.SideBar}>
                <Sidebar/>

      </div>
    </div>
  );
}
export default singin;
