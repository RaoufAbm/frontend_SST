import Cards from "@/components/cards";
import Header from "@/components/header";
import styles from "/app/page.module.css";


function station() {
  return (
    <div className='d-flex col-md-12 row '>
      <div  className=' col-md-12  '>
      <Header />
    </div>
      <div className=' col-md-12 d-flex justify-content-around row p-5  bg-transparent '>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    
      
        
      </div>
    </div>
  );
}

export default station;
