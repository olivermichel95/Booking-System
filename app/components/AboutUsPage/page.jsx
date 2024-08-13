import Image from 'next/image';
import Link from 'next/link';
import NavbarComponent from '../navbar/page';
import Footer from '../footer/page';
import styles from './page.module.css'

const AboutUsPage = () => {
  return (
<>
  <NavbarComponent/>
    <section className={styles.aboutsectio}>
        <div className={styles.spad}>
      <div className="container ">
        <div className="row">
            <div className="col-lg-6">
            <div className={styles.aboutText}>
              <div className={styles.sectionTitle}>
                <span>About Us</span>
                <h2> Intercontinental  <br /> Westlake Hotel</h2>
              </div>
              <p className="fpara">
              our site is a leading online accommodation site. We’re passionate about travel. Every day, we inspire and
               reach millions of visitors. 
              </p>
              <p className="spara">
              So when it comes to booking the perfect hotel,
              vacation rental, resort, apartment,  we’ve got you covered
              </p>
        
              <Link href="#" className={styles.aboutBtn}>
                Read More
              </Link>
            
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.aboutpic}>
              <div className="row">
                <div className="col-sm-6">
                  <Image
                    src="/img/about-1.jpg"
                    alt="About Us 1"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="col-sm-6">
                  <Image
                    src="/img/about-2.jpg"
                    alt="About Us 2"
                    width={200}
                    height={300}
                 
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      </div>
      <Footer/>
    </section>
    
    </>
  );
};

export default AboutUsPage;