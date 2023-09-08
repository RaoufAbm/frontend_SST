import Singin from "@/components/singin";
import Link from "next/link";
import styles  from "/app/page.module.css"
import Nav from "@/components/sidebar/page";

function singin() {
  return (
    <main className={styles.main}>
      <div>
      <Nav />
        <h1 className={styles.titre}>singin</h1>
        <Singin/>
      </div>
    </main>
  );
}
export default singin;
