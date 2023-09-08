import Login from "@/components/login";
import styles from '/app/page.module.css'
import Nav from "@/components/sidebar/page";

function login() {
  return (
    <main className={styles.main}>
      <div>
        <>
        <Nav />
        <Login/>
        </>
      </div>
    </main>
  );
}
export default login;
